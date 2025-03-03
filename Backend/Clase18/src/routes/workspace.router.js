import { Router } from "express"

import createWorkspaceController, { inviteUserToWorkspaceController } from "../controllers/workspace.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"


const workspaceRouter = Router()

workspaceRouter.post('/',authMiddleware,  createWorkspaceController)
workspaceRouter.post('/:workspace_id/:invited_id', authMiddleware, inviteUserToWorkspaceController)
export default workspaceRouter