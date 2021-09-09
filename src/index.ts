import { app } from "./app";



import { app } from "./app";
import { getAllUsers } from "./endpoints/users/getAllUsers";

import { deleteUser } from "./endpoints/users/deleteUser";


import { updateUser } from "./endpoints/users/updateUser";


app.put("/contacts/:id", updateUser)


// const app: Express = express();

// app.use(express.json());
// app.use(cors());



app.get("/contacts", getAllUsers)
// const server = app.listen(process.env.PORT || 3003, () => {
//     if (server) {
//        const address = server.address() as AddressInfo;
//        console.log(`Server is running in http://localhost: ${address.port}`);
//     } else {
//        console.error(`Failure upon starting server.`);
//     }
// });

app.delete("/contacts/:id", deleteUser)


import { createUser } from "./endpoints/users/createUser";



app.post("/contats", createUser)


