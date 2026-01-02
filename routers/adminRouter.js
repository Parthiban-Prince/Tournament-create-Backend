import express from 'express';
import { admincontroller, adminDataController,registerAdminDatasController,teamAdminDatasController,tournamentAdminDatasController,userAdminDatasController } from '../controller/adminController.js';

const router = express.Router();



router.post('/admin', admincontroller)

router.get('/userCount',adminDataController  )

router.get('/userlist',userAdminDatasController)

router.get('/tournamentlist',tournamentAdminDatasController)

router.get('/teamlist',teamAdminDatasController)

router.get('/registerdteam',registerAdminDatasController)


export default router;