import { Hono } from "hono";
import routerUser from "./User";
import routerBlog from "./blog";
const router = new Hono();

router.route("/", routerUser);
router.route("/", routerBlog);

export default router;
