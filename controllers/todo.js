'use strict'

module.exports = class TodoControllers {
  constructor() {
    this.Todo = require('../models/todo').Todo
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

  todoPost = async (req, res, next) => {
    try {
      const title = req.body.title
      
      if (!title) throw 'server tidak menerima request'
      
      const newTodo = new this.Todo({ title })
      const result = await newTodo.save()

      if (!result) throw 'kesalahan dalam mengirim request'

      res.status(200).json({
        status: 'success',
        code: 200,
        data: result
      })
    }
    catch(err) {
      await res.status(400).json({
        status: 'failed',
        code: 400,
        message: err
      })
    }
  }
}