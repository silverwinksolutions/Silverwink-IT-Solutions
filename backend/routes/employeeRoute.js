import express from 'express'
import { getAll } from '../controllers/employeeController.js';
const router = express.Router();

router.get('/all', getAll)


export default router