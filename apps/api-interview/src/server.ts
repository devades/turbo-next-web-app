import { json, urlencoded } from "body-parser";
import express, { type Express } from "express";
import morgan from "morgan";
import cors from "cors";
import apiRoutes from "./api/routes";
import privateRolesRoutes from "./api/private/roles/routes";

export const createServer = (): Express => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .use("/api", apiRoutes)
    .use("/api/private/roles", privateRolesRoutes)

  return app;
};
