const express = require('express');

const logger = require("./middleware/logger")

const usersRouter = require("./users/userRouter")

const server = express();
const port = 4444

server.use(express.json())
server.use(logger())

server.use(usersRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

module.exports = server;