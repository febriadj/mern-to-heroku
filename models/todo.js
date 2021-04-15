'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({ title: String }, { timestamps: true })

module.exports.Todo = mongoose.model('todos', TodoSchema)