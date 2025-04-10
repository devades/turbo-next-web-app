import express, { Request, Response, Router } from "express";
import { PrismaClient } from '../../../../prisma/app/generated/prisma/client'

const prisma = new PrismaClient()
const router: Router = express.Router();

router.put("/:blogPostId", async (req: Request, res: Response) => {
  const {blogPostId} = req.params;
  const updatedPost = await prisma.post.update({
    where: {
      id: Number(blogPostId),
    },
    data: {...req.body}
  })
  return res.json(updatedPost); 
});

router.post("/blog", async (req: Request, res: Response) => {
  const blogPost = req.body;
  const newBlogPost = await prisma.post.create({
    data: {...blogPost}
  })
  return res.status(201).send(newBlogPost); 
});

export default router;
