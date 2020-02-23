  
const pgp = require('pg-promise')();
const connectString = 'postgres://localhost:5432/seed';
const db = pgp(connectString);

module.exports = db;