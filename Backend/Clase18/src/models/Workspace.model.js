import mongoose from "mongoose"

const workspace_schema = new mongoose.Schema({
    name:{
        type: String, 
        required: true
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }, //esto es lo nuevo de objetid en ref ponemos el nombre del valor del modelo a relacionar

    members:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }], //corchetes porque los miembros son un array

    create_at: {
        type: Date, 
        default: Date.now
    }
    
})

const Workspace = mongoose.model('Workspace', workspace_schema)

export default Workspace

//POST /api/worskpaces AUTH_REQUIRED
//pasa por body el name