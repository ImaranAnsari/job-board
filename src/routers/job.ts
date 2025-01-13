import express from 'express';
import { createJob, deleteJobs, getJobs, updateJobs } from '../controllers/job';

const router = express.Router();

router.post('/', createJob);
router.get('/', getJobs);
router.put('/', updateJobs);
router.delete('/:id', deleteJobs);

export default router;