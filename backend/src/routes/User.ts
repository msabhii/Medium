import { Hono } from "hono";
const routerUser = new Hono();

routerUser.post("/api/v1/user/signup", (c) => {
  return c.text("Helo");
});

routerUser.post("/api/v1/user/signin", (c) => {
  return c.text("Helo");
});
export default routerUser;
