import workspaceRepository from "../repositories/workspace.repository.js"


const createWorkspaceController = async(req, res) => {
    try {
        const {name} = req.body

        const owner_id = req.user._id
        console.log(req.user)
        console.log(owner_id)
        const new_workspace = await workspaceRepository.createWorkspace({name, owner_id})

        console.log(new_workspace)
        res.json({
            ok: true,
            name: new_workspace.name,
            id: new_workspace._id,
            owner: owner_id
        })
    } catch (error) {
        console.log("error al registrar", error);
        if (error.status) {
            return res.status(400).send({
                ok: false,
                status: error.status,
                message: error.message
            });
        }
        res.status(500).send({
            status: 500,
            ok: false,
            message: "internal server error"
        });
    }
}
export const  inviteUserToWorkspaceController = async(req, res) => {
    try {
        const user_id=req.user._id
        const {invited_id, workspace_id} = req.params //invited_id tiene que estar igual que el parametro de busqueda
        const workspace_found = await workspaceRepository.addNewMember({workspace_id, owner_id: user_id, invited_id})
        res.json({
            ok: true,
            status: 201,
            message: 'User invited successfully'
             
        })

}catch (error) {
    console.log("error al registrar", error);
    if (error.status) {
        return res.status(400).send({
            ok: false,
            status: error.status,
            message: error.message
        });
    }
    res.status(500).send({
        status: 500,
        ok: false,
        message: "internal server error"
    });
}
}
export default createWorkspaceController

