require('dotenv').config();
const express = require('express')
const cors = require('cors')
const Router = require('./src/routes')
const app = express()

app.use(express.json())

app.use(cors())

app.use("/api", Router)

app.listen(process.env.APP_PORT, () => {
    console.log("Server is up and running")
})