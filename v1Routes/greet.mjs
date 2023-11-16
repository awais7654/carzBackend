import express from 'express';
let router = express.Router();

router.get('/hello', async (req, res, next) => {
    res.status(200).send({"message": "Hello welcome to awais Cloud Api "})
})

export default router