const express = require('express');

const users = require("../users/userDb")
const posts = require("../posts/postDb")

const validateUserId = require("../middleware/validateUserId")
const validateUser = require("../middleware/validateUser")
const validatePost = require("../middleware/validatePost")

const router = express.Router()

router.post("/", validateUser.validateUser(), (req, res) => {
  console.log("this is my user: ", req.body)
  users.insert(req.body)
    .then(user => {
      res.status(201).json({user})
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error with the database."
      })
    })
});

router.post("/:id/posts", validateUserId.validateUserId(), validatePost.validatePost(), (req, res) => {
  posts.insert(req.body)
  .then(post => {
    res.status(201).json(post)
  })
  .catch(error => {
    res.status(500).json(error)
  })
});

router.get('/', (req, res) => {
  users.get()
  .then(user => {
    res.status(200).json(user)
  })
  .catch(error => {
    res.status(500).json({
      error: "There was an error with the database."
    })
  })
});

router.get('/:id', validateUserId.validateUserId(), (req, res) => {
  users.getById(req.params.id)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(error => {
    res.status(500).json({
      error: "There was an error with the database."
    })
  })
});

router.get('/:id/posts', validateUserId.validateUserId(), (req, res) => {
  posts.get()
  .then(post => {
    res.status(200).json(post)
  })
  .catch(error => {
    res.status(500).json({
      error: "There was an error with the database."
    })
  })
});

router.delete('/:id', validateUserId.validateUserId(), (req, res) => {
  users.remove(req.params.id)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(error => {
    res.status(500).json({
      error: "There was an error with the database."
    })
  })
});

router.put('/:id', validateUserId.validateUserId(), validateUser.validateUser(), (req, res) => {
  users.update(req.params.id, req.body)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(error => {
    res.status(500).json({
      error: "There was an error with the database."
    })
  })
});

module.exports = router;
