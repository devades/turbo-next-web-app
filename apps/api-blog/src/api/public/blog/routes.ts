import express, { Request, Response, Router } from "express";
import { PrismaClient } from '../../../../prisma/app/generated/prisma/client'
import { log } from "@devades/logger";

const prisma = new PrismaClient()
const router: Router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  // TODO DB error handling return 500
  // try {
  const blogPosts = await prisma.post.findMany();  
  log('all blog posts', blogPosts)
  return res.json(blogPosts); 
  // } catch (error) {
  //   console.log(error)
  // }
});

router.get("/:blogPostId", (req: Request, res: Response) => {
  const blogPostId = req.params.blogPostId;
  return res.json({
    message: `This will return content for a single blog post by ID, blog/${blogPostId} , no authorization needed`,
  });
});

// router()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

export default router;
