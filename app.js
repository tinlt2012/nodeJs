const compression = require('compression')
const express = require ('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express ()
//init middleware
app.use(morgan("dev")) // hien thi log 
app.use(helmet()) // bao ve thong tin
app.use(compression) // nen du lieu
app.get('/',(req,res,next) => {
return res.status(500).json ({
    message : 'Hello'
})
})
module.exports = app