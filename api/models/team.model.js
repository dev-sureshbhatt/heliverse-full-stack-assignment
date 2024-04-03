import mongoose, { Mongoose } from "mongoose";

const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfiles'
    }]
})


export const TEAM = mongoose.model("Teams", teamSchema)