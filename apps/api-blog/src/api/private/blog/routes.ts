import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.put("/:blogPostId", (req: Request, res: Response) => {
  const blogPostId = req.params.blogPostId;
  return res.json({message:`blog/${blogPostId}`});
});

router.post("/blog", (req: Request, res: Response) => {
  const newBlogPost = req.body;
  res.status(201).send(newBlogPost);
});

export default router;
