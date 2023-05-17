import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

export const appconfig = (app: Application) => {
  app.use(express.json());
  app.use(morgan("*"));
  app.use(cors());

  app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
      message: "Server is running",
    });
  });
};
