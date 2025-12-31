import express from 'express';
import upload from '../helper/multer.js';
import uploadUserPost from '../helper/Upload.js';
// ✅ correct
import { createTournamentController,deleteTournamentController } from "../controller/tournamentController.js";



const router = express.Router();


router.post('/create',upload.single('qr'), uploadUserPost, createTournamentController,)

router.delete('/delete' ,deleteTournamentController, (req,res) =>{
    res.json({ status: 'Tournament delete API is running' });
})


export default router;