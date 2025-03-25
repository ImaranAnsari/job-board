import { Request, Response } from 'express';
import { insert, get, update, jobDelete } from '../models/job';

export const createJob = async (req: Request, res: Response) => {

    try {
        let data = await insert(req.body);
        if (data) {
            res.send({ status: "success", data: {}, message: "Job added successfully" });
        } else {
            res.send({ status: "error", message: "Job Creation failed" });
        }
    } catch (error) {
        console.log('error', error);
    }
}

export const getJobs = async (req: Request, res: Response) => {

    try {

        let data = await get();
        if (data) {
            res.send({ status: "success", data: data, message: "Jobs fetched successfully" });
        } else {
            res.send({ status: "error", message: "Job Creation failed" });
        }
    } catch (error) {
        console.log('error', error);
    }
}

export const updateJobs = async (req: Request, res: Response) => {

    try {
        let data = await update(req.body);
        if (data) {
            res.send({ status: "success", data: {}, message: "Job is Updated successfully" });
        } else {
            res.send({ status: "error", message: "Job Creation failed" });
        }
    } catch (error) {
        console.log('error', error);
    }
}

export const deleteJobs = async (req: Request, res: Response) => {

    try {
        let data = await jobDelete(req.params.id);
        if (data) {
            res.send({ status: "success", data: {}, message: "Job deleted successfully" });
        } else {
            res.send({ status: "error", message: "Job Creation failed" });
        }
    } catch (error) {
        console.log('error', error);
    }
}
