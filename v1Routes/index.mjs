import express from 'express';
let router = express.Router();

import greetRoutes from './greet.mjs';

router.use(greetRoutes);

export default router