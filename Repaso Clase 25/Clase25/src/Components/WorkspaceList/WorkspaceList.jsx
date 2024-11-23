import React from "react"
import "./WorkspaceList.css"
import WorkspaceItem from "../WorkspaceItem/WorkspaceItem"

const WorkspaceList = ({workspaces}) => {
    let workspaceListJSX = workspaces.map(
        (workspace) => {
            return(<WorkspaceItem
                img={workspace.img} 
                title={workspace.title} 
                miembros={workspace.miembros} 
                id={workspace.id}
                key={workspace.id}
                />
            )
        } 
    )
    return (
        <div>
            <h1>Tus Espacios de Trabajo</h1>
            <div>
                {workspaceListJSX}
            </div>
        </div>
    )
}

export default WorkspaceList