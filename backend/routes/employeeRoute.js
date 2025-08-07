import express from 'express'
import { getCount } from '../controllers/employeeController.js';
const router = express.Router();

router.get('/count', getCount)


export default router