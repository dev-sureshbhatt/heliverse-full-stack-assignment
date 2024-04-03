import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { USER } from "./models/userProfile.model.js";

const PORT = process.env.PORT | 4000;
const app = express();

app.use(cors());
app.use(express.json())

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




//GET all users with pagination support along with filter functionality
app.get("/api/users", async (req, res) => {
  //extracting info from URL query string
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const {first_name, gender, available, domain } = req.query
  const filters = {}

  if (first_name) filters.first_name = new RegExp(first_name, "i");
  if (domain) filters.domain = new RegExp(`^${domain}$`, "i")
  if (gender) filters.gender = new RegExp (`^${gender}$`, "i")
  if (available) filters.available = available


  const totalFilteredUser = await USER.countDocuments(filters)
  console.log(totalFilteredUser)
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  
  const results = {};
  
  if (startIndex > 0) {
    results.prev = {
      page: page - 1,
      limit: limit,
    };
  }
  if (endIndex < totalFilteredUser) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  const fetchUsers = await USER.find(filters).skip(startIndex).limit(limit);
  results.result = fetchUsers;

        res.json(results);
});



//endpoint to create a new user

app.post('/api/users', async (req,res)=>{
  try {
    const {first_name, last_name, email, gender, avatar, domain, available} = req.body
    const totalDocuments = await USER.countDocuments()
    const id = totalDocuments + 1

    const createdUser = await USER.create({
      first_name, last_name, email, gender, avatar, domain, available, id
    })
    res.status(201).json({"Created User":createdUser, "success": "true"})
  
    
  } catch (error) {
    console.log(error)
    res.status(500).json({msg: "something went wrong", success: false})
  }
  
})



//endpoint to retrieve a specific user by id

app.get('/api/users/:id', async (req,res)=>{
  try {
    const id = req.params.id
    const fetchUser = await USER.findOne({id})
    // console.log(fetchUser)
    if (!fetchUser) {
      res.status(404).json({"success":false, msg:"no user found"})
    } else 
    res.status(200).json({"success":"true", "userProfile":fetchUser})
      
  } catch (error) {
    console.log(error)
    res.status(500).json({"success":"false"})
  }

})


//endpoint to delete
app.delete('/api/users/:id', async (req,res)=>{
  try {
    const id = req.params.id
    const deleteStatus = await USER.deleteOne({id})
    // console.log(deleteStatus)
    if (deleteStatus.deletedCount > 0) {
      res.status(200).json({"success": true, msg:"User has been deleted"})
    } else if (deleteStatus.deletedCount == 0)
    {res.status(404).json({"success": false, msg:"no resource to delete"})}

  } catch (error) {
    res.status(500).json({msg:"something went wrong"})
  }
  
})




