import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "../Backend/database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "../Backend/routes/reservationRoute.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
console.log(process.env.FRONTEND_URL);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/reservation", reservationRouter);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "This is a Home page",
  });
});

dbConnection();

app.use(errorMiddleware);

export default app;
