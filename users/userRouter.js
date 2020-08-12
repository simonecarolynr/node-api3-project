const express = require('express');

const users = require("../users/userDb")
const posts = require("../posts/postDb")

const validateUserId = require("../middleware/validateUserId")
const validateUser = require("../middleware/validateUser")
const validatePost = require("../middleware/validatePost");
const { orWhereNotExists } = require('../data/dbConfig');

const router = express.Router();

router.post('/', validateUser(), (req, res) => {
  users.insert(req.body)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(error => {
      next(error)
    })
});

router.post('/:id/posts', validateUserId(), validatePost(), (req, res) => {
  posts.insert(req.body)
  .then(post => {
    res.status(201).json(post)
  })
  .catch(error => {
    next(error)
  })
});

router.get('/', (req, res) => {
  users.get()
  .then(user => {
    res.status(200).json(user)
  })
  .catch(error => {
    next(error)
  })
});

router.get('/:id', validateUserId(), (req, res) => {
  users.getById(req.params.id)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(error => {
    next(error)
  })
});

router.get('/:id/posts', validateUserId(), (req, res) => {
  posts.get()
  .then(post => {
    res.status(200).json(post)
  })
  .catch(error => {
    next(error)
  })
});

router.delete('/:id', validateUserId(), (req, res) => {
  users.remove(req.params.id)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(error => {
    next(error)
  })
});

router.put('/:id', validateUserId(), validateUser(), (req, res) => {
  users.update(req.params.id, req.body)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(error => {
    next(error)
  })
});

module.exports = router;
