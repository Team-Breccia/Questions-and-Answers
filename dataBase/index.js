const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'q_and_a'
})


client.on('error', (err, client) => {
  console.log(err)
});

client.connect();

module.exports = client;