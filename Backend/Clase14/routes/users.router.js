import express from "express";
import { getAllUsersController } from "../Controllers/get.users.controller.js";

const usersRouter = express.Router();

usersRouter.get('/all', getAllUsersController);

export default usersRouter;



