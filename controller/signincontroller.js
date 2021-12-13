
const User = require('../model/usermodel')

module.exports.sigin = function(req,res){
    return res.render('signin')
    
}
module.exports.signup = function(req,res){
    return res.render('signup')
}

module.exports.adduser = function(req,res){
    console.log(req.body)
    User.create({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
        gender:req.body.gender
    },function(err,newdata){
        if(err){
            console.log("error")
        }
        console.log(newdata)
    })
     return res.redirect('/')
}

module.exports.loggedin = function(req,res){
    console.log(req.body.email)
    
    User.find({email:req.body.email},function(err,user){
        if(err)
        {
            console.log("not found")
        }
        console.log(user)
        var obj = user[0];
        if(obj.password == req.body.password)
        {
            return res.render('userprofile',{title:obj.name})
        }
        else
        {
            return res.render('failed')
        }
    })
}