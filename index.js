const express =require("express")
const db = require('./config/mongoose')
const app = express()
const port = 8000;
const cookieParser = require('cookie-parser')
const layout = require('express-ejs-layouts');

app.use(layout)
app.set('view engine','ejs')
app.set('views','./views')
app.use(express.urlencoded())
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)
app.use(express.static('./assets'))

app.use('/',require('./routes'))

app.listen(port,function(err)
{
    if(err)
    {
        console.log("faileed")
    }
    console.log("server running success")
})