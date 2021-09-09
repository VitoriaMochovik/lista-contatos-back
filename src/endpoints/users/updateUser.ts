import { Request, Response } from "express";
import { UserDatabase } from "../../data/users/UserDatabase";
import { User } from "../../entities/User";

import { CustomError } from "../../error/CustomErros";


export const updateUser = async (
    req: Request,
    res: Response
) => {
    try {

        const id = req.params.id

        const { name, email, telephone_number} = req.body
        
        if(!id) {
            throw new Error("Fill in the id")
        }

        if(!name || !email || !telephone_number) {
            if(!name && !email && !telephone_number){
                throw new Error("Fill all fields");
            } else if(!name && !email){
                throw new Error("Fill in the 'name' and 'email' field");
            } else if(!name && !telephone_number){
                throw new Error("Fill in the 'name' and 'telephone_number' field");
            } else if(!email && !telephone_number){
                throw new Error("Fill in the 'email' and 'telephone_number' field");
            } else if(!name){
                throw new Error("Fill in the 'name' field");
            } else if(!email){
                throw new Error("Fill in the 'email' field");
            }
        }
        
        const result = await new UserDatabase().selectUserById(id)

        if(!result) {
            throw new Error("No contacts found")
        }

        const userDB = new UserDatabase()

        const newUser = new User(
            id,
            name,
            email,
            telephone_number
        )

        await userDB.updateUser(newUser)

        res.status(200).send({ contact: newUser})
    } catch (error) {
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