const express = require('express');

const logger = require("./middleware/logger")

const usersRouter = require("./users/userRouter")

const server = express()

//tells the server to use json for it's server responses
server.use(express.json())
server.use(logger())

server.use(usersRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
})



module.exports = server;