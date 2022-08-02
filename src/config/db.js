const { Pool } = require('pg');

const connectionString = 'postgresql://jutioncandrakirana:@localhost:5432/db_enigma_emp'
const pool = new Pool({
    connectionString,
})

module.exports = { pool }
