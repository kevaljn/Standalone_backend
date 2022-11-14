const express = require('express')
const router = express.Router()
// const emailController = require('./controllers/emails.controller')
//const reportsController = require('./controllers/reports.controller')
const userController = require('./controllers/users.controller')
const loginController = require('./controllers/login.controller')
const assocationsController = require('./controllers/assocations.controller')


// router.post('/createEmail',emailController.create)

// router.get('/getId',emailController.getId)


// router.post('/createMap/:report_id',assocationsController.createMapping)

// router.delete('/deleteMap/:report_id',assocationsController.deleteMapping)

// router.post('/createReport',reportsController.createReport)

router.post('/createUser',userController.createUser)

router.get('/login',loginController.login)

//*Data Report home page
router.get('/dashboard',assocationsController.getAlldata)

//*Updating the data
router.post('/UpdateAssocation/:id',assocationsController.updateMapping)

module.exports=router