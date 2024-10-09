import z from "zod";

export const signUpInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export const signinInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

export const updateBlog = z.object({
  title: z.string(),
  content: z.string(),
  id: z.number(),
});

export type signUpInput = z.infer<typeof signUpInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type CreateBlog = z.infer<typeof createBlogInput>;
export type UpdateBlog = z.infer<typeof updateBlog>;
