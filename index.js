import express from 'express'
import dotenv from 'dotenv'
import bootstrap from './src/bootstrap.js'
import connectToDb from './db/connection.js'

dotenv.config()

const app = express()
const port = +process.env.PORT

connectToDb()
bootstrap(app)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
