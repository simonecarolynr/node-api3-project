const users = require("../users/userDb")

function validateUserId() {
    return (req, res, next) => {
        users.getById(req.params.id)
        .then(user => {
            if (user) {
                req.user = user
                next()
            } else {
                res.status(404).json({
                    error: "User not found"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: "There was an error for the database"
            })
        })
    }
}

module.exports = {
   validateUserId
}