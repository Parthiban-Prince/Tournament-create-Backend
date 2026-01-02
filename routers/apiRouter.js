import express from 'express';
import userRouter from './userRouter.js';
import adminRouter from './adminRouter.js';
import galleryRouter from './galleryRouter.js';
import passwordRouter from './passwordRouter.js';
import tournamentRouter from './tournamentRouter.js';
import teamRouter from './teamRouter.js';
import regTeamRouter from './regTeamRouter.js'
import vote from './voteRouter.js'

const router = express.Router();

router.use('/user', userRouter);

router.use('/owner', adminRouter);

router.use('/gallery', galleryRouter);

router.use('/password', passwordRouter);

router.use('/tournament', tournamentRouter);

router.use('/team', teamRouter);

router.use('/reg',regTeamRouter)

router.use('/voted',vote)


export default router;