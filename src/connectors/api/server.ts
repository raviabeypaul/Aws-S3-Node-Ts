import express, { Application } from "express";
import bodyParser from "body-parser";
import { routes } from "./routes";
import { ExpressErrorMiddleware } from "../../middlewares/ErrorMiddlewares";
import cors from 'cors';

export const createServer = (): Application => {
  const app: Application = express();
  const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
    'PUT'
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors(corsOpts));
  routes(app);
  app.use(ExpressErrorMiddleware)
  return app;
};
