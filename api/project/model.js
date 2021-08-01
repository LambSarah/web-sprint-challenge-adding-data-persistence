// build your `Project` model here

const db = require('../../data/db-config')

const getAll = () => {
	return db('projects').orderBy('project_id', 'asc')
}

const getById = project_id => {
	return db('projects').where({ project_id })
}
const createProject = async newProject => {
	const [project_id] = await db('projects').insert(newProject)
	return getById(project_id)
}

module.exports = {
	getAll,
	getById,
	createProject
}