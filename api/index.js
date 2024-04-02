import express from 'express'
import dummyData from '../heliverse_mock_data.json' assert {type: 'json'}  



const PORT = process.env.PORT | 4000
const app = express()

app.listen(PORT, ()=>{
    console.log("App listening at PORT: ", PORT)
})


//GET all users with pagination support
app.get('/api/users', (req,res)=>{
    const {page, limit} = req.query
    const startIndex = (page -1) * limit
    const endIndex = page * limit
    const result = dummyData.slice(startIndex, endIndex)
    res.json(result)
})