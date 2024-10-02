import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
const routerBlog = new Hono();
routerBlog.use("/api/v1/blog/*", async (c, next) => {
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
        }
        else {
            c.status(403);
            return c.json({ error: "Unauthorized" });
        }
    }
    catch (error) {
        console.log(error);
    }
});
routerBlog.post("/api/v1/blog", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            published: false,
            author: {
                connect: { id: body.id },
            },
        },
    });
    return c.json({
        id: blog.id,
    });
});
routerBlog.put("/api/v1/blog/:id", (c) => {
    return c.text("Helo blog");
});
routerBlog.get("/api/v1/blog/bulk", (c) => {
    return c.text("Helo blog");
});
export default routerBlog;
