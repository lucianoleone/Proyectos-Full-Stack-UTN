import Message from "../models/Message.model.js"
import { ServerError } from "../utils/error.utils.js"
import channelRepository from "./channel.repository.js"
import workspaceRepository from "./workspace.repository.js"

class MessageRepository {
    async createMessage({sender_id, channel_id, content}){
        const channel_found = await channelRepository.findChannelById(channel_id)
        
        if (!channel_found) {
            throw new ServerError("Channel not found", 404)
        }
        //hay que pasar el valor como tostring porque sino trae el new objetid, de esta forma trae solo el numero del id
        const workspace_found = await workspaceRepository.findWorkspaceById(channel_found.workspace.toString)
        console.log(workspace_found)
        console.log({channel_found, workspace_found})
        if (!workspace_found.members.includes(sender_id)) {
            throw new ServerError("You are not member of this workspace", 403)
            
        }
        const new_message = await Message.create ({
            sender: sender_id, 
            channel: channel_id, 
            conent: content
        })
        return new_message
    }
    
}

const messageRepository = new MessageRepository()
export default messageRepository