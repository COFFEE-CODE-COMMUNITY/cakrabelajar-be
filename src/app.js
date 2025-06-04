import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes/index.js";
import { notFound, errorHandler } from "./middlewares/error.js";

const createApp = () => {
  const app = express();

  // Middleware
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan("dev"));

  // Routes
  app.use("/api", routes);

  // Error Handling
  app.use(notFound);
  app.use(errorHandler);

  return app;
};

export default createApp;
