import mongoose from "mongoose";


//Un channelk va a tener un nombre de canal, va a tener un workspace que va a ser referencia a la lista de workspaces, va a tener una fecha de creacion
//y un creador
const channel_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    workspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workspace'
    },
    create_at: {
        type: Date,
        default: Date.now
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Channel = mongoose.model('Channel', channel_schema)

export default Channel

