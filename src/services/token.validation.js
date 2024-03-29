const { verify } = require('jsonwebtoken')

const checkToken = async (req, res, next) => {
    // let token = req.get("authorization") || ("Bearer " + req.params.token)
    if (req.get("authorization") == "Bearer null") {
        token = ("Bearer " + req.params.token)
    }
    else {
        token = req.get("authorization")
    }
    if (token) {
        token = token.slice(7)
        await verify(token, "qwe1234", (err, decoded) => {
            if (err) {
                res.json({
                    success: 0,
                    message: "Invalid Token"
                })
            } else {
                //next middleware in the routes
                next()
            }
        })
    } else {
        res.json({
            success: 0,
            message: 'Access Denied!! Unauthorized user'
        })
    }
}

module.exports = { checkToken }