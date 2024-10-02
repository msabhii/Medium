import { Hono } from "hono";
import mainRouter from "./routes/index";
const app = new Hono();
app.route("/", mainRouter);
export default app;
