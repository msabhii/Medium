import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";

const routerUser = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWTSECRET: string;
  };
}>();

routerUser.use("/api/v1/blog/*", async (c, next) => {
  try {
    const header = c.req.header("authorization");

    if (!header) {
      return c.json({ error: "Some thing went worng with headers" });
    }
    const token = header.split(" ")[1];
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

routerUser.post("/api/v1/user/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  console.log(body);

  const userExist = prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (!userExist) {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    const payload = {
      id: user.id,
    };
    const sercret = c.env.JWTSECRET;
    const token = await sign(payload, sercret);

    return c.json({
      jwt: token,
    });
  }

  return c.json({ eror: "User already present." });
});

routerUser.post("/api/v1/user/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });
  if (!user) {
    c.status(403);
    return c.json({ error: "User not found" });
  }
  const secret = c.env.JWTSECRET;
  const payload = {
    id: user.id,
  };
  const jwt = await sign(payload, secret);
  return c.json({ jwt });
});
export default routerUser;
