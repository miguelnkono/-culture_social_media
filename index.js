'use strict';

import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Culture Social Media!' })
})

const port = process.env.PORT ||  3000

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})
