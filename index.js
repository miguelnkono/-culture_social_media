
import express from 'express'
import routes from "./routes/routes.js";
import cors from "cors";
import { config } from "dotenv";
import connection from "./data/connection.js";
config()

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.locals.connection = connection

app.use('/api', routes)
const port = process.env.PORT ||  3000

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})

