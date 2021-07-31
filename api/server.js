// build your server here and require it from index.js
const express = require('express')
const recipesRouter = require('./recipes/recipes-router')
const { errorHandling, notFound } = require('./recipes/recipes-middleware')

const server = express()

server.use(express.json())
server.use('/api/recipes', recipesRouter)
server.get('/', function (req, res, next) {
	res.send('Welcome to Recipes API')
	next()
})

server.use('*', notFound)
server.use(errorHandling)