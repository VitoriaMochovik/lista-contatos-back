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


    createUser = (user: User) => 
        BaseDataBase
            .connection(UserDatabase.table)
            .insert(user)


    selectUserById = async (id: string) => {
        const [result] = await BaseDataBase
            .connection(UserDatabase.table)
            .where({ id })

        if (result) return this.toUser(result)
    }

    updateUser = (user: User) => 
        BaseDataBase
            .connection(UserDatabase.table)
            .update(user)
            .where({id: user.id})


    
    deleteUser = (id: string) =>
        BaseDataBase
            .connection(UserDatabase.table)
            .delete()
            .where({ id })


    


    createUser = (user: User) => {
        BaseDataBase
            .connection(UserDatabase.table)
            .insert(user)
    }
}

