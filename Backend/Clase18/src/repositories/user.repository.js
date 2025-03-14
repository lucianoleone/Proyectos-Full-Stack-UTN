import promisePool from "../config/mysql.config.js";
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
                    let queryStr= 'INSERT INTO user (username, email, password, verification_token) VALUES (?,?,?,?)'
                    const [result] = await promisePool.execute(queryStr, [username, email, password, verification_token]) //result me devuelve solo el valor del queryresult
                
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
        // async findUserByEmail (email) {
        //     const user = await User.findOne({email})
        //     return user
        // }
        async findUserByEmail (email) {
            const queryStr = `SELECT * FROM user WHERE email = ?`
            const [result] = await promisePool.execute(queryStr, [email])
            return result[0]
         
        }
        async findUserById (id) {
            const queryStr = `SELECT * FROM user WHERE _id = ?`
            const [result] = await promisePool.execute(queryStr, [id])
            return result[0]
         
        } //esto lo hacemos por separado y no en el changepassword para llamarlo en el controlador para no sobrecargar esta operacion

        async verifyUserByEmail (email, verification_token) {
            const user_found = await this.findUserByEmail(email)
            if(!user_found){
                throw new ServerError('User not found', 404)
            }
            if(user_found.verified){
                throw new ServerError('User has already been verified', 400)
            }
            const queryStr = `UPDATE user SET verified = 1 WHERE email = ? AND verification_token = ?`
            await promisePool.execute(queryStr, [email, verification_token])
            return user_found
        }

        // async verifyUserByEmail (email, verification_token) {
        //     const user_found = await this.findUserByEmail(email)
        //     if(!user_found){
        //         throw new ServerError('User not found', 404)
        //     }
        //     if(user_found.verified){
        //         throw new ServerError('User has already been verified', 400)
        //     }
        //     user_found.verified = true
        //     await user_found.save()
        //     return user_found
        // }

        async changeUserPassword(id, newPassword) {
            const queryStr = `UPDATE users SET password = ? WHERE _id = ?`
            const [result] = await promisePool.execute(queryStr, [newPassword, id])
            return result[0]
        }
        // async changeUserPassword(id, password) {
        //     const foundUser = await User.findById(id)
        //     if(!foundUser) {
        //         throw new ServerError('User not found', 404)
        //     }
        //     foundUser.password = password
        //     await foundUser.save()
        // }
    // async create (
    //     {
    //         username, 
    //         email, 
    //         password,
    //         verification_token
    //     }) {
    //         try {
    //     await User.create(
    //         {
    //             username, 
    //             email, 
    //             password,
    //             verification_token
    //         })
    //         } catch (error) {
    //             if (error.code === 11000) {
    //                 if (error.keyPattern.username) {
    //                     throw new ServerError('User already exists', 400)
    //                 }
    //                 if (error.keyPattern.email) {
    //                     throw new ServerError('Email already exists', 400)
    //                 }
                    
    //             }
    //             throw error
    //         }
    // }
    // async findUserByEmail (email) {
    //     const user = await User.findOne({email})
    //     return user
    // }
    // async changeUserPassword(id, password) {
    //     const foundUser = await User.findById(id)
    //     if(!foundUser) {
    //         throw new ServerError('User not found', 404)
    //     }
    //     foundUser.password = password
    //     await foundUser.save()
    // }
    
}


export default new UserRepository()