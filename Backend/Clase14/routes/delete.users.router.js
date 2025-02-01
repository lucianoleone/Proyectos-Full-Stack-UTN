import express from "express";
import { deleteUserController } from "../Controllers/delete.users.controller.js";
const deleteUserRouter = express.Router();

deleteUserRouter.delete('/:email', deleteUserController)

export default deleteUserRouter