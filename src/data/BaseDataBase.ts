import knex from "knex"
import { config } from "dotenv"
import users from "./users/users.json"

config()

export class BaseDataBase {

    protected static connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_SCHEMA,
            port: 3306,
            multiStatements: true
        }
    })


    private printError = (error: any) => {
        console.log(error.sqlMessage || error.message) 
    }

    createTables = () => BaseDataBase
        .connection
        .raw(`

            CREATE TABLE IF NOT EXISTS contact_list_users (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                telephone_number VARCHAR(20) NOT NULL
            );
        
        `)
        .then(() => {
            console.log("Table successfully created!")
        })
        .catch(this.printError)

        insertUsers = () => BaseDataBase
            .connection("contact_list_users")
            .insert(users)
            .then(() => { console.log("Users saved!")})
            .catch(this.printError)
        
        closeConnection = () => {
            BaseDataBase.connection.destroy()
        }
}