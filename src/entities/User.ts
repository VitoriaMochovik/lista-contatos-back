import { CustomError } from "../error/CustomErros";


export class User {

    constructor(
        readonly id: string,
        readonly name: string,
        readonly email: string,
        readonly telephone_number: string
    ) {
        if(typeof name !== "string"){
            throw new CustomError(422, `'name' must be of type 'string'`)
        }

        if(typeof email !== 'string') {
            throw new CustomError(422, `'age' must be of type 'string'`);
        }

        if(typeof telephone_number !== "string"){
            throw new CustomError(422, `'telephone_number' must be of type 'string'`)
        }
    }
}