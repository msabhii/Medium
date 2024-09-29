import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { decode, sign, verify } from "hono/jwt";
import { withAccelerate } from "@prisma/extension-accelerate";
import { use } from "hono/jsx";

const routerUser = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWTSECRET: string;
  };
}>();

routerUser.post("/api/v1/user/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

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
});

routerUser.post("/api/v1/user/signin", (c) => {
  return c.text("Helo");
});
export default routerUser;
