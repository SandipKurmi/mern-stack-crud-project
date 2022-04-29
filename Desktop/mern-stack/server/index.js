import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'

import Connection from './database/db.js'
import Routes from './routes/route.js'
const app = express();
const PORT = 8000;
dotenv.config();
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/', Routes)

const UserName = process.env.DB_USERNAME
const Password = process.env.DB_PASSWORD
Connection(UserName, Password)


app.listen(PORT, () => console.log(`server is runing successfully ${PORT}`))