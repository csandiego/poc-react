import * as RxDB from 'rxdb';

RxDB.plugin(require('pouchdb-adapter-idb'));

export default async function () {
    const db = await RxDB.create({name: 'poc_react_db', adapter: 'idb'});
    await db.collection({
	name: 'todos',
	schema: {
	    title: 'todos schema',
	    version: 0,
	    type: 'object',
	    properties: {
		todo: {
		    type: 'string',
		    primary: true
		},
		completed: {
		    type: 'boolean'
		}
	    }
	}
    });
    return db;
}
