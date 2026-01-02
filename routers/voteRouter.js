import express from "express";
import { voteController } from "../controller/voteController.js";
import  authenication from '../helper/authenication.js'

const router = express.Router();

router.post("/vote", authenication, voteController);

export default router;
