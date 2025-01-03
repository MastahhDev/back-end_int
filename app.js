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

app.use("/api/recipes", recipeRouter);
app.use("/api/authors", authorRouter);
app.use("/api/auth", authRouter);

export default app;


/*
import express from "express";
import mongoose from "mongoose";
import recipeRoutes from "./routes/recipes";
import authorRoutes from "./routes/authors";

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(recipeRoutes);
app.use(authorRoutes);

app.listen(port, () => {
  console.log(`Servidor prendido, link del host: http://localhost:${port}/`);
});
*/