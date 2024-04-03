import mongoose, { Mongoose } from "mongoose";

const teamSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfiles'
    }
})


export const TEAM = mongoose.model("Teams", teamSchema)