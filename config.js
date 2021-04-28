require('dotenv').config();
module.exports = {
  mysql: {
    connectionLimit: 10,
    host: process.env.MYSQL_HOST || 'mysql',
    user: process.env.MYSQL_USER || 'aBcDeFgHiJk',
    password: process.env.MYSQL_PASS || 'aBcDeFgHiJk',
    database: process.env.MYSQL_DB || 'aBcDeFgHiJk',
  },
};
