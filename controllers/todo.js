'use strict'

module.exports = class TodoControllers {
  constructor() {
    this.Todo = require('../models/todo')
  }

  todoGet = async (req, res, next) => {
    try {
      const result = await this.Todo.find().sort({ createdAt: - 1 })

      res.status(200).json(result)
    }
    catch(err) {
      await res.status(204).json({ message: 'no content' })
    }
  }
}