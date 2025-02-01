import { getAllUsers } from "../repository/user.repository.js";


export const getAllUsersController = async (req, res) => {
    try {
        const users = await getAllUsers()
        console.log(users)
        return res.send({
            ok: true,
            status:200,
            users
        })
    } catch (error) {
        console.log('error en el registro', error)
        return res.send({
            ok: false,
            message: error.message,
            status: 500
        })
    }
}

