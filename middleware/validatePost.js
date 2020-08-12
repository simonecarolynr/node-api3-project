const posts = require("../posts/postDb")

function validatePost() {
    return (req, res, next) => {
        if (!req.body) {
            res.status(400).json({
                error: "Missing post data"
            })
            next()
        } else if (!req.body.text) {
            res.status(400).json({
                error: "Missing required text field"
            })
            next()
        }
    }
}

module.exports = {
    validatePost
}