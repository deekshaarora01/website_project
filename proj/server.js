const express =require('express')

const registerRoute = require('./routes/register')
const app = express();
const contactform = require('./routes/contactr')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/cregister',contactform)
app.use('/registering',registerRoute)
app.use('/',express.static(__dirname+'/public_static'))

app.listen(4445,function(){
    console.log("Server started on http://localhost:4445")
})