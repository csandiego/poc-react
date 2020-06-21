export default class {
    constructor(dbp) {
	this.dbp = dbp;
    }

    async add(todo) {
	let db = await this.dbp;
	return await db.todos.insert(todo);
    }

    async list() {
	let db = await this.dbp;
	return db.todos.find().$;
    }

    async delete(key) {
	let db = await this.dbp;
	return db.todos.findOne(key).remove()
    }

    async setCompleted(key, completed) {	
	let db = await this.dbp;
	db.todos.findOne(key).update({
	    $set: {
		completed: completed
	    }
	});
    }
}
