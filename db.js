const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'react_express_db',
  password: 'Allisonhtb0110',
  port: 5432,
});

module.exports = pool;