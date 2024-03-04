require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFound = require('./minddlewares/notFound')
const errorMiddlewares = require('./minddlewares/error')
const authRoute = require('./routes/auth-route')
const app = express()

app.use(cors())
app.use(express.json())

//service
app.use('/auth', authRoute)
 
// notFound
app.use( notFound )

//error
app.use(errorMiddlewares)
// let post = process.env.PORT || 8000
const port = process.env.PORT || 8889;
app.listen(port , ()=> console.log('Server on Port :', port))