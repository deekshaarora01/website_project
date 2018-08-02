const express = require('express')
const route = express.Router()

const Sequelize = require('sequelize')

const DataTypes = Sequelize.DataTypes
const db = new Sequelize({
  dialect: 'sqlite',

  storage: __dirname + './newdb.db',

})
const Contact = db.define('contact', {
    
    name: DataTypes.STRING,
    phno: DataTypes.STRING,
    school:DataTypes.STRING,
    fname :DataTypes.STRING,
    email:DataTypes.STRING,
    class:DataTypes.STRING,
    course:DataTypes.STRING,
    message:DataTypes.STRING

})

route.get('/',(req,res)=>{
   console.log('successful')
   res.send(" Form submitted successfully ..!!")
})

route.post('/',(req,res)=>{
    db.sync().then(()=>{
        Contact.create({
            name : req.body.name,
            phno : req.body.phno,
            school : req.body.school,
            fname: req.body.fname,
            email: req.body.email,
            class:req.body.classy,
            course:req.body.course,
            message:req.body.message
           
        })
    }
    
    )
    res.redirect(req.originalUrl)
})

module.exports = route