import { json, urlencoded } from "body-parser";
import express, { type Express } from "express";
import morgan from "morgan";
import cors from "cors";
import apiRoutes from "./api/routes";
import publicBlogRoutes from "./api/public/blog/routes";
import privateBlogRoutes from "./api/private/blog/routes";

export const createServer = (): Express => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .use("/api", apiRoutes)
    .use("/api/public/blog", publicBlogRoutes)
    .use("/api/private/blog", privateBlogRoutes)
    .get("/message/:name", (req, res) => {
      return res.json({ message: `hello ${req.params.name}` });
    })
    .get("/status", (_, res) => {
      return res.json({ ok: true });
    });

  return app;
};
