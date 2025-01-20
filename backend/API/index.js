import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const PORT = process.env.PORT || 3000;

dotenv.config({ path: '../.env' });

mongoose.connect(process.env.MONGO)
  .then(()=> { 
    console.log("MongoDB is connected")
    })
    .catch(err => {
    console.log(err);
  });

const app = express();

app.listen(PORT, ()=> {
  console.log(`server running on port ${PORT}`);
})