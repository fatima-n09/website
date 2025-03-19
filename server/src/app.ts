import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";
import exampleRoute from "./routes/exampleRoutes";
import userRoute from "./routes/userRoutes";
import mongoose from "mongoose";
import { errorHandler } from "./middleware/errorHanlder";
import passport from "passport";
import kPassport from "./middleware/passport";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

const app = express();

dotenv.config({ path: path.resolve(__dirname, "../.env") });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL as string],
    credentials: true,
  })
);

console.log("DB Connection String:", process.env.DB);

app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize());
kPassport(passport);

app.use("/", exampleRoute);
app.use("/user", userRoute);

app.use(() => {
  throw createHttpError(404, "Route not found");
});

app.use(errorHandler);

const PORT = process.env.PORT;

if (!process.env.DB) {
  throw new Error("DB environment variable is not defined.");
}

mongoose
  .connect(process.env.DB as string)
  .then(() => {
    console.log("Connected to the database.");
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
    throw createHttpError(501, "Unable to connect to database");
  });
