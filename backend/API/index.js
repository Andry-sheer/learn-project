import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"

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
});

app.use("/api/user", userRouter);