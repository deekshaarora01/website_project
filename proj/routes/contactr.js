const express = require('express')
const route = express.Router()

const Sequelize = require('sequelize')

const DataTypes = Sequelize.DataTypes
const db = new Sequelize({
  dialect: 'sqlite',

  storage: __dirname + './contactus.db',

})
const ContactUs = db.define('contactus', {
    
    name: DataTypes.STRING,
    school:DataTypes.STRING,
    class_s:DataTypes.STRING,
    formMessage:DataTypes.STRING

})

route.get('/',(req,res)=>{
   console.log('successful')
   res.send(" Form submitted successfully ..!!")
})

route.post('/',(req,res)=>{
    db.sync().then(()=>{
        ContactUs.create({
            name : req.body.name,
            school : req.body.school,
            class_s:req.body.class_s,
            forMessage:req.body.message_us
           
        })
    }
    
    )
    res.redirect(req.originalUrl)
})

module.exports = route