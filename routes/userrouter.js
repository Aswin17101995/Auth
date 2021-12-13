const express = require("express")
const router =  express.Router()
const controluser = require('../controller/usercontroller')
router.get('/',controluser.user)

module.exports = router