import express from "express";
import recipeRouter from "./routes/recipeRoutes.js";
import authorRouter from "./routes/authorRoutes.js";
import authRouter from "./routes/authRoutes.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors()); //Allows communication between back and front
app.use(cookieParser()); //Allows reading and managing cookies
app.use(express.json()); //Allows handling files as requests
app.use(
  fileUpload({
    limits: { fileSize: 1 * 1024 * 1024 }, // 1MB
    abortOnLimit: true,
  })
);

app.use("/", recipeRouter)
app.use("/api/recipes", recipeRouter);
app.use("/api/authors", authorRouter);
app.use("/api/auth", authRouter);

export default app;