
export const deleteUserController = async (req, res) => {
    try {
        const {email} = req.params
        await deleteUser({email})
        return res.send({ok: true})
    } catch (error) {
        console.log('error en el registro', error)
        return res.send({
            ok: false,
            message: error.message,
            status: 500
        })
    }
}