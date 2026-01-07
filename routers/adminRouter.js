import express from 'express';
import { admincontroller, adminDataController,registerAdminDatasController,teamAdminDatasController,tournamentAdminDatasController,userAdminDatasController,createMatch,updateMatch,getAllMatches,getMatchById } from '../controller/adminController.js';

const router = express.Router();



router.post('/admin', admincontroller)

router.get('/userCount',adminDataController  )

router.get('/userlist',userAdminDatasController)

router.get('/tournamentlist',tournamentAdminDatasController)

router.get('/teamlist',teamAdminDatasController)

router.get('/registerdteam',registerAdminDatasController)


router.post("/match", createMatch);

// Update match
router.put("/match/:id", updateMatch);

// Get all matches
router.get("/matches", getAllMatches);

// Get one match
router.get("/match/:id", getMatchById);
export default router;