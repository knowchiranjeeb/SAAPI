
const pg = require('pg');
const dbHost = 'tfcolsocial-do-user-14281593-0.b.db.ondigitalocean.com';
const dbUser = 'doadmin';
const dbPass = 'AVNS_IStoLHxESBLt80vLiFM';
const dbase = 'Invoice';

// Database Configuration
const pool = new pg.Pool({
     user: dbUser,
     host: dbHost,
     database: dbase,
     password: dbPass,
     port: '25060',
     ssl: {
      rejectUnauthorized: false, 
     }, 
    // sslmode: require, 

  });

  module.exports = pool;