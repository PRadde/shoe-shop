require('dotenv').config()
const mongoose = require('mongoose')
console.log (process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports.Wish = require('./dbConfig')