'use strict';

import express from 'express'
import routes from "./routes/routes.js";

const app = express()

app.use(express.json())

app.use(routes)
const port = process.env.PORT ||  3000

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})
