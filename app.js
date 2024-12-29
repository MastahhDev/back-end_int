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
