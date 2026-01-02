import express from 'express';
import {teamCreateController,getTeamController,joinTeamController,leaveTeamController,getTeamDetailsRepository} from '../controller/teamController.js';
import authenticateRequest from '../helper/authenication.js'

const router = express.Router();

// Define team-related routes here
router.post('/create',authenticateRequest,teamCreateController, (req, res) => {
    res.send('Team Home');
});

router.get('/:teamId',authenticateRequest,getTeamDetailsRepository)
router.get('/data/list',authenticateRequest,getTeamController)


router.post("/join/:teamId", authenticateRequest, joinTeamController);
router.post("/leave/:teamId", authenticateRequest, leaveTeamController);



export default router;