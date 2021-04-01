import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();
const app = express();

//Mongo Db
const db = process.env.MDB_URL;
mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.log(error.reason));
//

const port = process.env.PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));