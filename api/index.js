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



app.get("/api/usersTest", async (req,res)=>{
  const {page, limit, first_name, gender, available, domain} = req.query
  console.log(page, limit, first_name, gender, available, domain)
  const filters = {}

  if (first_name) filters.first_name = new RegExp(first_name, "i");
  if (domain) filters.domain = new RegExp(domain, "i")
  if (gender) filters.gender = new RegExp (gender, "i")
  if (available) filters.available = available

  console.log(filters)
  const totalFilteredUser = await USER.countDocuments(filters)
  const fetchedUser = await USER.find(filters)
  console.log("total documents are", totalFilteredUser )
  console.log("fetched user is",fetchedUser)

})

//GET all users with pagination support
app.get("/api/users", async (req, res) => {
  //extracting info from URL query string
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const {name, gender, available, domain } = req.query
  const filter = {}


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








