import { Hono } from "hono";
import mainRouter from "./routes/index";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
const app = new Hono();

app.route("/", mainRouter);

export default app;
