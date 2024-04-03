import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { USER } from "./models/userProfile.model.js";

const PORT = process.env.PORT | 4000;
const app = express();

app.use(cors());

app.listen(PORT, () => {
  console.log("App listening at PORT: ", PORT);
});

//Mongoose Connection

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log(err, "something went wrong connecting MONGOOSE");
  });



//GET all users with pagination support
app.get("/api/users", async (req, res) => {
  //extracting info from URL query string
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const totalUsers = await USER.countDocuments();
  console.log(totalUsers);

  const results = {};
  

  if (startIndex > 0) {
    results.prev = {
      page: page - 1,
      limit: limit,
    };
  }
  if (endIndex < totalUsers) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  const fetchUsers = await USER.find().skip(startIndex).limit(limit);
        results.result = fetchUsers;

        res.json(results);
});








