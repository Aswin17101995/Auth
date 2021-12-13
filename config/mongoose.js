const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/socialsite");
const db= mongoose.connection
db.on('error',console.error.bind(console,"error on connecting db"))
db.once('open',function(){
    console.log("db running success")
})

module.exports = db;