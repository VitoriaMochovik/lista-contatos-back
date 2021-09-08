import { User } from '../../entities/User'
import { BaseDataBase } from '../BaseDataBase'

export class UserDatabase extends BaseDataBase {

    private static table = "contact_list_users"

    private toUser = (input: any): User  => new User(
        input.id,
        input.name,
        input.email,
        input.telephone_number
    )

    createUser = (user: User) => {
        BaseDataBase
            .connection(UserDatabase.table)
            .insert(user)
    }
}