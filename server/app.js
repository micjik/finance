import express from "express"
import 'dotenv/config'
import morgan from "morgan"
import mongoose from "mongoose"
import userRouter from "./routes/userRoute.js"
import cors from "cors"


const app = express()

const port = process.env.PORT || 4000

const DB = process.env.DATABASE.replace('<db_password>', process.env.DATABASE_PASSWORD)

app.use(express.json())

app.use(morgan('dev'))

app.use('/user', userRouter)

const corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}



mongoose.connect(DB)
.then(() => console.log('DB connection successful'))


app.listen(port, ()=> {
    console.log(`The server is running on port:${port}`)
})