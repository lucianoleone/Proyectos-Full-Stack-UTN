import Message from "../models/Message.model.js";
import { ServerError } from "../utils/error.utils.js";
import channelRepository from "./channel.repository.js";
import workspaceRepository from "./workspace.repository.js";

class MessageRepository {
    async create({sender_id, channel_id, content}){
        const channel_found = await channelRepository.findChannelById(channel_id)
        console.log('El canal encontrado es', channel_found)
        if (!channel_found) {
            console.log('No se encontro el canal')
            throw new ServerError("Channel not found", 404)
        }
        if (!channel_found.workspace.members.includes(sender_id)) {
            throw new ServerError("You are not member of this workspace", 403)
            
        }
        const new_message = await Message.create ({
            sender: sender_id, 
            channel: channel_id, 
            content
        })
        console.log(new_message)
        return new_message
    }
    async findMessagesFromChannel({channel_id, user_id}){
        const channel_found = await channelRepository.findChannelById(channel_id)
        if (!channel_found) {
            throw new ServerError("Channel not found", 404)
        }
        const workspace_found = await workspaceRepository.findWorkspaceById(channel_found.workspace.toString())
        if (!workspace_found.members.includes(user_id)) {
            throw new ServerError("You are not member of this workspace", 403)
        }
        const messages = await Message.find({channel: channel_id}).populate('sender').populate('channel')
        return messages
    }
}

const messageRepository = new MessageRepository()
export default messageRepository