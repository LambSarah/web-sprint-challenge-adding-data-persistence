
exports.up = function (knex) {
	return knex.schema.createTable('projects', tbl => {
		tbl.increments('project_id')
		tbl.string('project_name', 128).notNullable()
		tbl.string('project_description', 128)
		tbl.integer('project_completed').unsigned().notNullable().defaultsTo(0)
	})
		.createTable('resources', tbl => {
			tbl.increments('resource_id')
			tbl.string('resource_name').notNullable().unique()
			tbl.string('resource_description')
		})
		.createTable('tasks', tbl => {
			tbl.increments('task_id')
			tbl.string('task_description').notNullable()
			tbl.string('task_notes')
			tbl.boolean('task_completed').defaultsTo(false)
			tbl.integer('project_id')
				.unsigned()
				.notNullable()
				.references('project_id')
				.inTable('projects')
		})
		.createTable('project_resources', tbl => {
			tbl.integer('project_id')
				.unsigned()
				.notNullable()
				.references('project_id')
				.inTable('projects')
			tbl.integer('resource_id')
				.unsigned()
				.notNullable()
				.references('resource_id')
				.inTable('resources')
			tbl.primary(['project_id', 'resource_id'])
		})
}
exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('tasks')
		.dropTableIfExists('resources')
		.dropTableIfExists('projects')
};
