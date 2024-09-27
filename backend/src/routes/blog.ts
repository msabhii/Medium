import { Hono } from "hono";
const routerBlog = new Hono();

routerBlog.post("/api/v1/blog", (c) => {
  return c.text("Helo blog");
});
routerBlog.put("/api/v1/blog/:id", (c) => {
  return c.text("Helo blog");
});
routerBlog.get("/api/v1/blog/bulk", (c) => {
  return c.text("Helo blog");
});

export default routerBlog;
