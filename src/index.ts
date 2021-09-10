import { app } from "./app";
import { getAllUsers } from "./endpoints/users/getAllUsers";
import { deleteUser } from "./endpoints/users/deleteUser";
import { updateUser } from "./endpoints/users/updateUser";
import { createUser } from "./endpoints/users/createUser";
import { getUserById } from "./endpoints/users/getUserById";



app.put("/contacts/:id", updateUser)
app.get("/contacts", getAllUsers)
app.get("/contacts/:id", getUserById)
app.delete("/contacts/:id", deleteUser)
app.post("/contacts", createUser)


