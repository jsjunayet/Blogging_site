import express from "express"
import router from "./app/router/router";


const app = express();
app.use(express.json())
app.use("/api", router)

export default app