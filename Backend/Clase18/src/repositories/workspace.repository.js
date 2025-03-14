import promisePool from "../config/mysql.config.js";
import Workspace from "../models/Workspace.model.js";
import { ServerError } from "../utils/error.utils.js";

class WorkspaceRepository {
    async findWorkspaceById(id){
        const queryStr = `SELECT * FROM workspaces WHERE _id = ?`
        const [result] = await promisePool.execute(queryStr, [id])
        return result[0]
        }
    // async findWorkspaceById(id){
    //     return await Workspace.findById(id)
    // }
    async createWorkspace({name, owner_id}){
        let queryStr = `INSERT INTO workspaces (name, owner) VALUES (?,?)`
        const [result] = await promisePool.execute(queryStr, [name, owner_id])
        const workspace_id = result.insertId
        await this.addNewMember({workspace_id : workspace_id, owner_id})
        return {workspace_id, owner : owner_id, member: [owner_id]} //devuelve el id del workspace creado
        
    }

    async isMember({workspace_id, user_id}){
        let queryStr = `SELECT 1 FROM workspace_members WHERE workspace_id = ? AND user_id = ?`
        const [result] = await promisePool.execute(queryStr, [workspace_id, user_id])
        return result.length > 0
    }
    
    async addNewMember({workspace_id, invited_id}){
        const workspace_found = await this.findWorkspaceById(workspace_id)
        // if(!workspace_found) {
        //     throw new ServerError('Workspace not found', 404)
        // }
        // //Que sea el dueño
        // if(!workspace_found.owner === String(owner_id)){
        //     throw  new ServerError('You are not the owner of this workspace',403)
        // }
        //Que el invitado ya no sea miembro del workspace
        // if(workspace_found.members.includes(invited_id)){
        //     throw  new ServerError('User is already a member of this workspace',403)
        // }
        // workspace_found.members.push(invited_id)
        let queryStr = `INSERT INTO workspace_members (workspace_id, user_id) VALUES (?,?)`
        await promisePool.execute(queryStr, [workspace_id, invited_id])
        
    }
/* Codigo en mongo DB*/
    // async createWorkspace({name, owner_id}){
    //     const workspace = await Workspace.create({
    //         name, 
    //         owner : owner_id,
    //         members: [owner_id]
    //     })
    // return workspace
    // }

    // async addNewMember({workspace_id, owner_id, invited_id}){
    //     const workspace_found = await this.findWorkspaceById(workspace_id)
    //     if(!workspace_found) {
    //         throw new ServerError('Workspace not found', 404)
    //     }
    //     //Que sea el dueño
    //     if(!workspace_found.owner.equals(owner_id)){
    //         throw  new ServerError('You are not the owner of this workspace',403)
    //     }
    //     //Que el invitado ya no sea miembro del workspace
    //     if(workspace_found.members.includes(invited_id)){
    //         throw  new ServerError('User is already a member of this workspace',403)
    //     }
    //     workspace_found.members.push(invited_id)
    //     await workspace_found.save()
    //     return workspace_found
    // }
}

const workspaceRepository = new WorkspaceRepository()
export default workspaceRepository