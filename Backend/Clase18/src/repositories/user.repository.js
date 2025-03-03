import User from "../models/User.model.js";
import { ServerError } from "../utils/error.utils.js";

class UserRepository {
    
    async create (
        {
            username, 
            email, 
            password,
            verification_token
        }) {
            try {
        await User.create(
            {
                username, 
                email, 
                password,
                verification_token
            })
            } catch (error) {
                if (error.code === 11000) {
                    if (error.keyPattern.username) {
                        throw new ServerError('User already exists', 400)
                    }
                    if (error.keyPattern.email) {
                        throw new ServerError('Email already exists', 400)
                    }
                    
                }
                throw error
            }
    }
    async findUserByEmail (email) {
        const user = await User.findOne({email})
        return user
    }
    async changeUserPassword(id, password) {
        const foundUser = await User.findById(id)
        if(!foundUser) {
            throw new ServerError('User not found', 404)
        }
        foundUser.password = password
        await foundUser.save()
    }
    
}


export default new UserRepository()