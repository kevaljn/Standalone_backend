const userModel = require("../models/users.model");
const { sendResetEmail } = require("../services/resetPassword.email");
const { encryptPassword } = require("../services/password.encrypt");

const forgetPassword = async (req, res) => {
  try {
    const email = req.body.email;

    const [userDetails] = await userModel.getUserbyId(email);

    const userId = userDetails.iD;

    const fullName = userDetails.fullName;

    sendResetEmail(email, userId, fullName);

    res.send({
        message: "Reset mail sent to your email id."
    });
  } catch (err) {
    res.send({ 
        message: "Cannot send email. ",
        error: err
    });
  }
};

const resetPassword = async (req, res) => {
  const userId = parseInt(req.params.userId);

  const password = encryptPassword(req.body.password);

  const changepassword = await userModel.updatePassword(userId, password);

  res.send({
    message: "Password Changed",
  });
};

module.exports = { resetPassword, forgetPassword };
