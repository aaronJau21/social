import express from "express";
import morgar from "morgan";
import "dotenv/config";
import { db } from "../config/db";
import AuthRouter from "./routes/auth.router";

export const port = process.env.PORT || 5000;
db();
export const app = express();

app.use(morgar("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", AuthRouter);
