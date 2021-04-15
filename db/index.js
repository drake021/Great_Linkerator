// Connect to DB
const { Client } = require('pg');
const DB_URL = process.env.DATABASE_URL || `postgres://localhost:5432/linkerator-dev`;
const client = new Client(DB_URL);

// database methods


async function getLinks() {
  try {

    const { rows: links } = await client.query(`
    SELECT *
    FROM links;
  `);

    return links;

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
      INSERT INTO links(link, comment)
      VALUES($1, $2)
      RETURNING id, link, comment;
      `, [link, comment]);

    return link_;

  } catch (error) {
    throw error;
  }
}


async function addClick({
  link,
}) {

  try {
    const { rows: [link_] } = await client.query(`
    UPDATE links
    SET clicks = clicks + 1
 WHERE link = $1;
      `, [link]);

    return link_;

  } catch (error) {
    throw error;
  }
}


// export
module.exports = {
  client,
  createLink,
  getLinks,
  addClick
}