import { app } from "./app";

import { deleteUser } from "./endpoints/users/deleteUser";

// const app: Express = express();

// app.use(express.json());
// app.use(cors());

app.delete("/contacts/:id", deleteUser)

import { createUser } from "./endpoints/users/createUser";


app.post("/contats", createUser)


