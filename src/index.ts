import { app } from "./app";

import { updateUser } from "./endpoints/users/updateUser";


app.put("/contacts/:id", updateUser)
// const app: Express = express();

// app.use(express.json());
// app.use(cors());
import { createUser } from "./endpoints/users/createUser";



app.post("/contats", createUser)

