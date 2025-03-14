import workspaceRepository from "../repositories/workspace.repository"
import { ServerError } from "../utils/error.utils"


class   WorkspacesService{
    async createWorkspace({name, owner_id}){
        const workspace_created = await workspaceRepository.createWorkspace({name, owner_id})
        await workspaceRepository.addNewMember({workspace_id, owner_id})
        return workspace_created
    }
    async addNewMember({workspace_id, invited_id}){
        const workspace_found = await workspaceRepository.findWorkspaceById(workspace_id)
        if(!workspace_found) {
            throw new ServerError('Workspace not found', 404)
        }
        //Que sea el dueño
        if(!workspace_found.owner === String(owner_id)){
            throw  new ServerError('You are not the owner of this workspace',403)
        }
        const is_member = await workspaceRepository.isMember({workspace_id, invited_id})
        if(!is_member){        
            const await workspaceRepository.addNewMember({workspace_id, invited_id})
            return {message: 'User added to workspace'}
        }
        return {message: 'User is already a member of this workspace'}
        
}
}

const workspaceService = new WorkspacesService()
export default workspaceService