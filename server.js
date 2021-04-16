'use strict'

// core module
const path = require('path')

const // npm module
	express = require('express')
,	cors = require('cors')
, dotenv = require('dotenv')
, app = express()

const // local module
	runMongo = require('./config/database')
, port = process.env.PORT || 8080

dotenv.config({ path: './.env' }) // konfigurasi environment variables
app.use(cors())

// middleware express
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', require('./routes/index'))

// production
if (process.env.NODE_ENV == 'production') {
	app.use(express.static('client/build'))

	app.use((req, res, next) => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
	})
}

runMongo() // menjalankan koneksi mongodb

app.listen(port)
console.log('server running on port:' + port)