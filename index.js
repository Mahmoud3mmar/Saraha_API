import express from 'express'
import dotenv from 'dotenv'
import  ConnectToDb  from './db/connection.js'
import  {bootstrap}  from './bootstrap.js'

dotenv.config()

const app = express()
const port = 3000



ConnectToDb()
bootstrap(app)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))