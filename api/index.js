import express from 'express'
import dummyData from '../heliverse_mock_data.json' assert {type: 'json'}  
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()





const PORT = process.env.PORT | 4000
const app = express()



app.use(cors())


app.listen(PORT, ()=>{
    console.log("App listening at PORT: ", PORT)
})

//Mongoose Connection


mongoose.connect(process.env.MONGO).then(()=>{console.log("mongoose connected")}).catch((err)=>{console.log(err, "something went wrong connecting MONGOOSE")})





//GET all users with pagination support
app.get('/api/users', (req,res)=>{
    //extracting info from URL query string
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    
    //slicing results that needs to be send back to the client based on query string values
    const startIndex = (page -1) * limit
    const endIndex = page * limit
    const result = dummyData.slice(startIndex, endIndex)
    
    
    // logic to send extra information of next and prev page 
    const results = {}
    

    if (endIndex < dummyData.length){
    results.next = {
        page: page + 1,
        limit: limit
    }
}

    if (startIndex > 0){
        results.prev = {
            page: page - 1,
            limit: limit
        }
    }
    

    results.result = result
    
    
    res.json(results)
})