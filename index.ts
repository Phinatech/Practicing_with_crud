import express, { Application } from "express";
import { appconfig } from "./mainapp";
import { dbconfig } from "./config/db";
const app: Application = express();
const port = 2023;

appconfig(app);
dbconfig();

app.listen(port, () => {
  console.log("server listening on port", port);
});
