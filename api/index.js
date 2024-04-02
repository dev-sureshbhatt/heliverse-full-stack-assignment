import express from 'express'
import dummyData from '../heliverse_mock_data.json' assert {type: 'json'}  



const PORT = process.env.PORT | 4000
const app = express()

app.listen(PORT, ()=>{
    console.log("App listening at PORT: ", PORT)
})