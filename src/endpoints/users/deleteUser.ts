import { Request, Response } from "express";
import { UserDatabase } from "../../data/users/UserDatabase";
import { User } from "../../entities/User";

import { CustomError } from "../../error/CustomErros";


export const deleteUser = async (
    req: Request,
    res: Response
) => {
    try {

        const id = req.params.id

        if(!id) {
            throw new Error("Fill in the id")
        }
    
        const result = await new UserDatabase().selectUserById(id)

        if(!result) {
            throw new Error("No contacts found")
        }

        const userDB = new UserDatabase()

        await userDB.deleteUser(id)

        res.status(200).send("Contact deleted")
    } catch (error: any) {
        if(error instanceof CustomError)
            res 
                .status(error.statusCode)
                .send(error.message)
        else 
            res
                .status(500)
                .send("Internal error, contact the support")
    }
} 