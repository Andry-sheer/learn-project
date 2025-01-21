import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

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

app.use(express.json());

app.listen(PORT, ()=> {
  console.log(`server running on port ${PORT}`);
});



app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);