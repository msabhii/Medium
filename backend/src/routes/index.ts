import { Hono } from "hono";
import routerUser from "./User";
import { bookRouter } from "./blog";
const router = new Hono();

router.route("/api/v1/user/", routerUser);
router.route("/api/v1/blog/", bookRouter);

export default router;
