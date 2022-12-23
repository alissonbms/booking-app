import express from "express";
import dotenv from "dotenv";
import dbConn from "./config/dbConn.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// Routers
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import roomRouter from "./routes/roomRouter.js";
import propertyRouter from "./routes/propertyRouter.js";
import stripeRouter from "./utils/stripe.js";

import cors from "cors";
import errorHandler from "./utils/errorHandler.js";

const app = express();
dotenv.config();

dbConn();

mongoose.connection.once("open", () => {
  console.log("Connected with MongoDB");
  app.listen(3003, () => console.log("Server running on port 3003"));
});

mongoose.connection.on("error", (err) => console.log(err.message));

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/room", roomRouter);
app.use("/api/property", propertyRouter);
app.use("/", stripeRouter);

app.use(errorHandler);

app.all("*", (req, res) => {
  res.status(404);
  // if (req.accepts("html")) {
  //   res.sendFile(path.join(__dirname, "views", "404.html"));
  // } else
  if (req.accepts("json")) {
    return res.json({ message: "404 Not Found" });
  } else {
    return res.type("txt").send("404 Not Found");
  }
});
