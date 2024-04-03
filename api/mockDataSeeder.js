//Using  the script to load provided  Mock JSON Data
import mongoose from "mongoose";
import { USER } from "./models/userProfile.model.js";
import dummyData from '../heliverse_mock_data.json' assert {type: 'json'}


mongoose.connect('mongodb+srv://devsureshbhatt:xZ3hp3Eat4o1kLC9@dobby-db.cf1rjey.mongodb.net/heliverse?retryWrites=true&w=majority').then(() => {
    console.log('mongoose connected');
     seedData();// Call the function to seed the data after successful connection
  }).catch((err) => {
    console.log(err, 'something went wrong connecting MONGOOSE');
  });

  
  const seedData = async () => {
    try {
      // Drop the existing collection to start fresh (optional, depends on your use case)
      await USER.deleteMany({});
      
      // Insert the mock data into the USER collection
      await USER.insertMany(dummyData);
  
      console.log('Mock data seeded successfully');
      mongoose.disconnect(); // Disconnect from the database after seeding
    } catch (error) {
      console.error('Error seeding data:', error);
    }
  };
  
