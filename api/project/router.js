// build your `/api/projects` router here
const express = require('express')
const Projects = require('./projects-model')
const router = express.Router()
router.use(express.json())

router.get('/', (req, res, next) => {
	Projects.getAll()
		.then(projects => {
			res.status(200).json(projects)
			next()
		}).catch(err => {
			next(err)
		})
})