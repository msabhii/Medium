import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { bodyLimit } from "hono/body-limit";
import { sign, verify } from "hono/jwt";

const routerBlog = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWTSECRET: string;
  };
}>();

routerBlog.use("/api/v1/blog/*", async (c, next) => {
  try {
    const header = c.req.header("authorization");

    if (!header) {
      return c.json({ error: "Some thing went worng with headers" });
    }
    const token = header.split(" ")[1];
    console.log(token, "This is the token");

    const secret = c.env.JWTSECRET;
    if (!secret) {
      return c.json({ error: "Token is invalid" });
    }

    const response = await verify(token, secret);
    if (response.id) {
      next();
    } else {
      c.status(403);
      return c.json({ error: "Unauthorized" });
    }
  } catch (error) {
    console.log(error);
  }
});

routerBlog.post("/api/v1/blog", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      published: false,
      author: {
        connect: { id: body.id },
      },
    },
  });
  return c.json({
    id: post.id,
  });
});

routerBlog.put("/api/v1/blog", async (c) => {
  const jwtPayload = c.get("jwtPayload");
  if (!jwtPayload || typeof jwtPayload !== "object") {
    return c.json({ msg: "Unauthorized" }, 401);
  }
  const userid = jwtPayload.id as string;

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try {
    await prisma.post.update({
      where: {
        id: body.id,
        authorID: userid,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({
      msg: "Post Updated",
    });
  } catch (error) {
    return c.json({ msg: error });
  }
});

routerBlog.get("/api/v1/blog/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  await prisma.post.findUnique({
    where: {
      id,
    },
  });
});

routerBlog.get("/api/v1/blog/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const post = await prisma.post.findMany({});
  return c.json(post);
});

export default routerBlog;
