'use strict'

const 
  mongoose = require('mongoose')
, uri = process.env.MONGO_URI || 'mongodb://localhost:27017/projects'

const runMongo = async function() {
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true
  }

  try {
    const db = await mongoose.connect(uri, options)

    console.log('mongodb connected')
    return db
  }
  catch(err) {
    console.error(err)
    process.on('exit', () => process.exit(1))
  }
}

module.exports = runMongo