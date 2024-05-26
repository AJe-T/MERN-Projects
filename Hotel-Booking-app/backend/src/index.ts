import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", (req: Request, res: Response) => {
  res.json({ message: "Hello form Express Endpoint" });
  res.end();
});

app.get("/contact", (req, res) => {
  res.status(200).send("Get api");
  res.end();
});

app.listen(2500, () => {
  console.log(`Server is running on port 2500`);
});
