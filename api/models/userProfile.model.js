import mongoose from "mongoose";


const userProfileSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        required: true

    },
    gender: {
type: String,
required: true
    },
    avatar: {
type: String
    },
    domain: {
    type: String,
    required: true
    },
    available: {
type: Boolean,
required: true
    }

})


export const USER = mongoose.model('UserProfiles', userProfileSchema)