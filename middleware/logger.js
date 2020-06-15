module.exports = (format) => {
    return (req, res, next) => {
        switch(format) {
            case "logger":
                console.log(req.method, req.url, req.date)
                break
            default:
                console.log(req.method, req.url, req.date)
        }

        next()

        switch(format, id) {
            case "validateUserId":
                if (id) {
                    req.user = id
                }
                if (!id) {
                    res.status(400).json({
                        message: "invalid user id"
                    })
                }
        }

        next()

        switch(body) {
            case "validateUser":
            if(!req.body) {
                res.status(400).json({
                    message: "missing user data"
                })
            if(!req.body.name) {
                res.status(400).json({
                    message: "missing required name field"
                })
            }
            
        }

        next()

        switch (body) {
            case "validatePost":
                if (!req.body) {
                    res.status(400).json({
                        message: "missing post data"
                    })
                if(!req.body.text) {
                    res.status(400).json({
                        message: "missing required text field"
                    })
                }
            }
        }
    }
}
}