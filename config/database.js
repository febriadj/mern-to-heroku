'use strict'

const mongoose = require('mongoose')

const runMongo = async function(uri) {
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true
  }

  try {
    const mongouri = uri || 'mongodb://localhost:27017/projects'
    const db = await mongoose.connect(mongouri, options)

    console.log('mongodb connected')
    return db
  }
  catch(err) {
    console.error(err)
    process.on('exit', () => process.exit(1))
  }
}

module.exports = runMongo