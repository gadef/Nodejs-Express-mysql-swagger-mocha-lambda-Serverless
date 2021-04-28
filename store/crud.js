const pool = require('./dbMysql');

async function list(table) {
  return await pool.query(`SELECT * FROM ${table}`);
}

async function get(table, id) {
  return await pool.query(`SELECT * FROM ${table} WHERE id=${id}`);
}

async function insert(table, data) {
  return await pool.query(`INSERT INTO ${table} SET ?`, data);
}

async function update(table, data) {
  return await pool.query(`UPDATE ${table} SET ? WHERE id=?`, [
    data,
    data.id,
  ]);
}

async function upsert(table, data) {
  if (data && data.id) {
    return await update(table, data);
  } else {
    return await insert(table, data);
  }
}

async function query(table, query, join) {
  let joinQuery = '';
  if (join) {
    const key = Object.keys(join)[0];
    const val = join[key];
    joinQuery = `JOIN ${key} ON ${table}.${val} = ${key}.id`;
  }

  return await pool.query(
    `SELECT * FROM ${table} ${joinQuery} WHERE ${table}.?`,
    query
  );
}

module.exports = {
  list,
  get,
  upsert,
  query,
};
