import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
    username: {
        type: String,
        required: true,
        unique: true //podria no ser que no deba ser unico
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    verification_token: {
        type: String
    },
    creat_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    }
    }
)

const User = mongoose.model('User', userSchema);
export default User