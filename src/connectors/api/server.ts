import express, { Application } from "express";
import bodyParser from "body-parser";
import { routes } from "./routes";
import { ExpressErrorMiddleware } from "../../middlewares/ErrorMiddlewares";

export const createServer = (): Application => {
  const app: Application = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  routes(app);
  app.use(ExpressErrorMiddleware)
  return app;
};
