const express = require("express");
const router = express.Router();
// const emailController = require('./controllers/emails.controller')
//const reportsController = require('./controllers/reports.controller')
const { checkToken } = require("../src/services/token.validation");
const userController = require("./controllers/users.controller");
const loginController = require("./controllers/login.controller");
const assocationsController = require("./controllers/assocations.controller");
const resetPasswordController = require("./controllers/resetPassword.controller")

// router.post('/createEmail',emailController.create)

// router.get('/getId',emailController.getId)

// router.post('/createMap/:report_id',assocationsController.createMapping)

// router.delete('/deleteMap/:report_id',assocationsController.deleteMapping)

// router.post('/createReport',reportsController.createReport)

router.post("/forgot_password", resetPasswordController.forgetPassword)

router.post("/reset_password/:userId/:token", checkToken, resetPasswordController.resetPassword)

router.post("/createUser", userController.createUser);

router.post("/login", loginController.login);

//*Data Report home page
router.get("/dashboard", checkToken, assocationsController.getAlldata);

//*Updating the data
router.post("/UpdateAssocation/:id", assocationsController.updateMapping);

module.exports = router;
