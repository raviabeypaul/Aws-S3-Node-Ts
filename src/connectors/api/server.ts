import express, { Application } from "express";
import bodyParser from "body-parser";
import { routes } from "./routes";
import { ExpressErrorMiddleware } from "../../middlewares/ErrorMiddlewares";
import cors from 'cors';

export const createServer = (): Application => {
  const app: Application = express();
  const options = {
    origin: ['https://raviabeypaul.github.io/','https://raviabeypaul.github.io/React-CRUD-Seacrh-Sample/', 'http://localhost:3000/'],
    }
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors(options));
  routes(app);
  app.use(ExpressErrorMiddleware)
  return app;
};
