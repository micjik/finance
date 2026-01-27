import express from "express"
import 'dotenv/config'
import morgan from "morgan"
import mongoose from "mongoose"


const app = express()

const port = process.env.PORT || 4000

const DB = process.env.DATABASE.replace('<db_password>', process.env.DATABASE_PASSWORD)

app.use(express.json())

app.use(morgan('dev'))

app.get('/user', (req, res) => {
    res.send('get users')
})

mongoose.connect(DB)
.then(() => console.log('DB connection successful'))


app.listen(port, ()=> {
    console.log(`The server is running on port:${port}`)
})