const express = require('express')
const router = express.Router();

const control = require('../controller/signincontroller')

router.get('/',control.sigin)
router.post('/signin',control.loggedin)
router.get('/signup',control.signup)
router.post('/adduser',control.adduser)
router.use('/user',require('./userrouter'))
module.exports= router

