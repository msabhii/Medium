import { Hono } from "hono";
import routerUser from "./User";
import { blogRouter } from "./blog";
const router = new Hono();

router.route("/api/v1/user/", routerUser);
router.route("/api/v1/blog/", blogRouter);

export default router;
