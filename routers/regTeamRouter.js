import express from "express";
import { tournamentRegisterController } from "../controller/registerController.js";
import Upload from '../helper/multer.js'
import uploadPaymentScreenshot from '../helper/Upload.js'
import authMiddleware from '../helper/authenication.js'


const router = express.Router();

router.post(
  "/tournament/register",
  authMiddleware,
  Upload.single("paymentScreenshot"),
  uploadPaymentScreenshot,
  tournamentRegisterController
);

export default router;
