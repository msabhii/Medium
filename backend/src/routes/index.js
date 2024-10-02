import { Hono } from "hono";
import routerUser from "./User";
import routerBlog from "./blog";
const router = new Hono();
router.route("/api/v1/user'", routerUser);
router.route("/api/v1/blog", routerBlog);
export default router;
