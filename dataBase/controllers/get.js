const client = require('../index.js');

module.exports = {
  getAnswers: ({question_id, page, count}, callback) => {
    var pgsql = `SELECT * FROM answers WHERE question_id = ${question_id} AND reported = 0 LIMIT ${count}`

    client.query(pgsql)
      .then(data => { callback(null, data)})
      .catch(err => {callback (err)});
  },

  addQuestion: ({product_id, body, name, email}, callback) => {
    var pgsql = `INSERT INTO questions (product_id, body, asker_name, asker_email ) VALUES (${product_id}, ${body}, ${name}, ${email});`;

    client.query(pgsql)
      .then(data => { callback(null, true)})
      .catch(err => {callback (err)});
  },

  addAnswer: ({question_id, body, name, email, photos}, callback) => {
    var pgsql = `INSERT INTO answers (question_id, body,answerer_name, answerer_email ) VALUES (${question_id}, ${body}, ${name}, ${email});`;

    client.query(pgsql)
      .then((data) =>
        {
          if (photos){
            client.query (`SELECT * FROM answers ORDER BY date_written DESC LIMIT 1;`)
            .then(data => {
                var answer_id = data.answer_id;
                var otherpsql = `INSERT INTO answers (answer_id, url) VALUES (${answer_id}, ${photos});`;
                client.query (otherpsql)
                  .then(data => { callback(null, true)})
                  .catch(err => {callback (err)});
            })
            .catch(err => {callback (err)});
          }
        }
      )
      .then(data => { callback(null, true)})
      .catch(err => {callback (err)});
  },

  helpfulQuestion: (question_id, callback) => {
    var question_id = parseInt(question_id);
    var pgsql = `UPDATE questions SET reported = reported + 1 WHERE id = ${question_id}`;
    client.query(pgsql)
    .then(data => {callback (null, true)})
    .catch(err => {callback (err)});
  },

  reportQuestion: (question_id, callback) => {
    var question_id = parseInt(question_id);
    var pgsql = `UPDATE questions SET reported = reported + 1 WHERE id = ${question_id}`;
    client.query(pgsql)
    .then(data => {callback (null, true)})
    .catch(err => {callback (err)});
  },

  helpfulAnswer: (answer_id, callback) => {
    var answer_id = parseInt(answer_id);
    var pgsql = `UPDATE answers SET helpful = helpful + 1 WHERE id = ${answer_id}`;
    client.query(pgsql)
    .then(data => {callback (null, true)})
    .catch(err => {callback (err)});
  },

  reportAnswer: (answer_id, callback) => {
    var answer_id = parseInt(answer_id);
    var pgsql = `UPDATE answers SET reported = reported + 1 WHERE id = ${answer_id}`;
    client.query(pgsql)
    .then(data => {callback (null, true)})
    .catch(err => {callback (err)});
  }
}
