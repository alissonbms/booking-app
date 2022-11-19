import express from "express";
import dotenv from "dotenv";
import dbConn from "./config/dbConn.js";
import mongoose from "mongoose";

const app = express();
dotenv.config();

dbConn();

mongoose.connection.once("open", () => {
  console.log("Connected with MongoDB");
  app.listen(3003, () => console.log("Server running on port 3003"));
});

// To handle errors after initial connection was established
mongoose.connection.on("error", (err) => console.log(err.message));
