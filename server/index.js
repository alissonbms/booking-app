import express from "express";
import dotenv from "dotenv";
import dbConn from "./config/dbConn.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import helmet from "helmet";

//Utilities
import corsOptions from "./config/corsOptions.js";
import stripeRouter from "./utils/stripe.js";
import errorHandler from "./utils/errorHandler.js";

//Routers
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import roomRouter from "./routes/roomRouter.js";
import transactionRouter from "./routes/transactionRouter.js";
import propertyRouter from "./routes/propertyRouter.js";

const app = express();
app.use(cors(corsOptions));
app.use(helmet());

dotenv.config();
dbConn();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3003;

mongoose.connection.once("open", () => {
  console.log("Connected with MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => console.log(err.message));

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/room", roomRouter);
app.use("/api/property", propertyRouter);
app.use("/api/stripe", stripeRouter);
app.use("/api/transaction", transactionRouter);

app.use(errorHandler);

// app.use(express.static(path.join(__dirname, "../client/build")));
// app.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "../client", "/build", "/index.html"))
// );

// app.all("*", (req, res) => {
//   res.status(404);
//   if (req.accepts("html")) {
//     res.sendFile(path.join(__dirname, "../client", "/", "404.html"));
//   } else if (req.accepts("json")) {
//     return res.json({ message: "404 Not Found" });
//   } else {
//     return res.type("txt").send("404 Not Found");
//   }
// });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"), (error) => {
    if (error) {
      res.status(500).send(error);
    }
  });
});
