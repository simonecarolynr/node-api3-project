const users = require("../users/userDb")

function validateUser() {
    return (req, res, next) => {
        if (!req.body) {
            res.status(400).json({
                error: "Missing user data"
            })
            next()
        } else if (!req.body.name) {
            res.status(400).json({
                error: "Missing required name field"
            })
            next()
        }
        
        next()
    }
}

module.exports = {
    validateUser
}