require('dotenv').config();
const express = require('express')
const Router = require('./src/routes')
const app = express()

app.use(express.json())

app.use("/api",Router)

app.listen(process.env.APP_PORT,()=>{
    console.log("Server is up and running")
})