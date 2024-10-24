import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWTSECRET: string;
  };
  Variables: {
    userID: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("authorization") || "";
  console.log("This is the auth header", authHeader);
  try {
    const user = await verify(authHeader, c.env.JWTSECRET);
    if (user) {
      console.log("reaching");

      c.set("userID", user.id as string);
      console.log(user.id, "after setting userID");
      await next();
    } else {
      c.status(403);
      return c.json({
        message: "You are not logged in",
      });
    }
  } catch (error) {
    console.log("Geting error while verify", error);
  }
});

blogRouter.post("/", async (c) => {
  console.log("Hittin on put endpoint");
  const authorId = c.get("userID");
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorID: authorId,
        published: false,
      },
    });
    return c.json({
      id: blog.id,
    });
  } catch (error) {
    console.error("Error creating blog post:", error);
    c.status(500);
    return c.json({
      message: "Error creating the blog post.",
    });
  }
});

blogRouter.put("/", async (c) => {
  console.log("Hittin on put endpoint");

  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.post.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return c.json({
    id: blog.id,
  });
});

//Pagination
console.log("Hitting the bulk endpoint");
blogRouter.get("/bulk", async (c) => {
  try {
    console.log("Entering the try block");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blogs = await prisma.post.findMany({
      select: {
        title: true,
        content: true,
        id: true,
        author: { select: { name: true } },
      },
    });
    console.log("Blogs fetched", blogs);

    return c.json({ blogs });
  } catch (error) {
    console.log("Error in bulk endpoint", error);
  }
});

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({
      id: blog,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      mess: "Error while fetching the Blogs",
    });
  }
});
