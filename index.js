import express, { json } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import { dbConnect } from './utils/dbConnect.js'
import userRouter from './routes/userRoute.js'
import orderRouter from './routes/orderRoute.js'
import { createErrorMsg, sendErrorResponse } from './utils/errorResponse.js'

import path from 'path'

const app = express()
dotenv.config()

app.use(cookieParser())
app.use(express.json())

app.use(cors())
app.options('*', cors())

app.use("/api/user/", userRouter)
app.use("/api/order/", orderRouter)


app.get('/', (req, res) => {
  res.status(200).send("Hello")
})

app.use(sendErrorResponse)


// const __dirname = path.dirname('./');


// const __dirname = (() => { let x = path.dirname(decodeURI(new URL(import.meta.url).pathname)); return path.resolve((process.platform == "win32") ? x.substr(1) : x); })();
// app.use(express.static(path.join(__dirname, 'build')))

// console.log(path.join(__dirname, 'build'))

app.listen((8800), () => {
  dbConnect()
  console.log('listening on port 8800');
})

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })



