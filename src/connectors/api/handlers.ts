import { RegisterationController } from "./../../controllers/RegistrationController";
import { Request, Response } from "express";
export const handlers = {
    test :async (req : Request,res : Response) => {
        const response = await new RegisterationController().test()
        res.json(response)
    },
    updateReservation :async (req:Request, res :Response) => {
        const response = await new RegisterationController().update(
            req.body);
        res.json(response)
    },
    getAllReservation : async (req : Request, res : Response) =>{
        const response = await new RegisterationController().getAll()
        res.json(response)
    },
    create : async (req : Request, res : Response) =>{
        const response = await new RegisterationController().create(req.body)
        res.json(response)
    }
}