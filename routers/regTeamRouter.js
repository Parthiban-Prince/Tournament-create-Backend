import express from 'express'
import {registerController} from '../controller/registerController.js'

const router =express.Router()

router.post('/team',registerController )

export default router