const express = require('express')
const cors = require('cors')
const connect = require('./database/db.js')
const UserModel = require("./models/userModel.js")
const userRoutes = require('./routes/userRoutes.js')
const app = express()



connect()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())



app.use('/auth', userRoutes)



app.listen(3000, ()=>{
    console.log("server running at port 3000")
})




