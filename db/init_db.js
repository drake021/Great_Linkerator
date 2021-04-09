// code to build and initialize DB goes here
const {
  client,
  createLink
} = require('./index');





async function dropTables() {
  try {
    console.log('Starting to drop tables...');
    
    client.query(`
      DROP TABLE IF EXISTS comments;
      DROP TABLE IF EXISTS reports;
    `);

    console.log('Finished dropping tables!');
  } catch (error) {
    console.error('Error while dropping tables!');

    throw error;
  }
}

async function buildTables() {
  try {
    console.log('Starting to construct tables...');

    await client.query(`
      CREATE TABLE links(
        id SERIAL PRIMARY KEY,
        link varchar(255) UNIQUE NOT NULL,
        clicks INTEGER,
        comment TEXT NOT NULL,
      );

      CREATE TABLE tags(
        id SERIAL PRIMARY KEY,
        tags varchar(255) UNIQUE NOT NULL,
      )
    `);

    console.log('Finished constructing tables!');
  } catch (error) {
    console.error('Error constructing tables!');

    throw error;
  }
}

async function createInitialLinks() {
  try {
    console.log('Trying to create initial link data...');

    const linkOne = await createLink({
      link: 'www.firstlink.com',
      clicks: 0,
      comment: 'This is the first link created from pre-populated data...'
    });

    const linkTwo = await createLink({
      link: 'www.secondlink.com',
      clicks: 0,
      comment: 'This is the second link created from pre-populated data...'
    });

    console.log('Success creating initial links!');

    return [linkOne, linkTwo]
  } catch (error) {
    console.error('Error while creating initial links!');
    throw error;
  }
}

async function buildDB() {
  try {

    await dropTables();
    await buildTables();
    await createInitialLinks();
  } catch (error) {
    throw error;
  }
}




buildDB()
  .catch(console.error)
  .finally(() => client.end());