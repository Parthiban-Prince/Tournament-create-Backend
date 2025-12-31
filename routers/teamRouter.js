import express from 'express';

const router = express.Router();

// Define team-related routes here
router.post('/create', (req, res) => {
    res.send('Team Home');
});

router.get('/:teamId', (req, res) => {
    const { teamId } = req.params;
    res.send(`Team Details for ID: ${teamId}`);
}   );



export default router;