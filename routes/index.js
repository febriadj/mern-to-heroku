'use strict'

const router = require('express').Router()

const TodoControllers = require('../controllers/todo')
const controllers = new TodoControllers()

router.get('/todo', controllers.todoGet)
router.post('/todo', controllers.todoPost)
router.delete('/todo/:id', controllers.todoDelete)

module.exports = router