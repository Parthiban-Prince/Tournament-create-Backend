import express from 'express';

const router = express.Router();

router.get('/rest' , (req,res) => {
    res.send("Password Reset Endpoint");
});

export default router;