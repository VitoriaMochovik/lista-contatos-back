import { Request, Response } from "express";
import { UserDatabase } from "../../data/users/UserDatabase";
import { User } from '../../entities/User'
import { CustomError } from "../../error/CustomErros";


export const createUser = async (
    req: Request,
    res: Response
) => {
    try {
        const userDB = new UserDatabase()

        const { name, email, telephone_number} = req.body

        const id = Date.now().toString()

        const newUser = new User(
            id,
            name,
            email,
            telephone_number
        )

        await userDB.createUser(newUser)

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