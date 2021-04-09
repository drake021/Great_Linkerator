// Connect to DB
const { Client } = require('pg');
const DB_URL = process.env.DATABASE_URL || `postgres://localhost:5432/linkerator-dev`;
const client = new Client(DB_URL);

// database methods


async function getLinks() {
  try {

    const { rows } = await client.query(`
    SELECT *
    FROM links;
  `);


    console.log(rows);

    return rows;

  } catch (error) {
    throw error;
  }
}


async function createLink({
  link,
  comment
}) {

  try {
    const { rows: [link_] } = await client.query(`
      INSERT INTO reports(link, comment)
      VALUES($1, $2, $3, $4)
      RETURNING id, link, comment;
      `, [link, comment]);

    return link_;

  } catch (error) {
    throw error;
  }
}


// export
module.exports = {
  client,
  createLink,
  getLinks
}