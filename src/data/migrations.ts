import { BaseDataBase } from "./BaseDataBase";

const database = new BaseDataBase()

database
    .createTables()
    .then(database.insertUsers)
    .finally(database.closeConnection)