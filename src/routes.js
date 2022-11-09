const express = require('express')
const router = express.Router()
// const emailController = require('./controllers/emails.controller')
const assocationsController = require('./controllers/assocations.controller')
//const reportsController = require('./controllers/reports.controller')


// router.post('/createEmail',emailController.create)

// router.get('/getId',emailController.getId)

router.get('/dashboard',assocationsController.getAlldata)

// router.post('/createMap/:report_id',assocationsController.createMapping)

// router.delete('/deleteMap/:report_id',assocationsController.deleteMapping)

// router.post('/createReport',reportsController.createReport)

router.post('/UpdateAssocation/:id',assocationsController.updateMapping)

module.exports=router