import { app } from "./app";
import { createUser } from "./endpoints/users/createUser";


app.post("/contats", createUser)

