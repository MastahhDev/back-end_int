import app from "./app.js";
import mongoose from "mongoose";
import { MONGO_URI, PORT } from "./config/config.js";

mongoose
  .connect(MONGO_URI) //Connect to mongo
  .then(() => console.log("Base de datos conectada")) //If connects
  .catch((error) => console.log(error)); //If error
  
app.listen(PORT, () => { //Server listen
  console.log("Servidor funcionando");
});
