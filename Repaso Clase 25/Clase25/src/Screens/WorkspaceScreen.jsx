import React from "react";
import { useParams } from "react-router-dom";

const WorkspaceScreen = () => {
    const params = useParams();
    const workspace_id = params.workspace_id
    return (
        <div>
            <h1>Bienvenido al espacio de trabajo {workspace_id}</h1>
        </div>
    )
}    

export default WorkspaceScreen