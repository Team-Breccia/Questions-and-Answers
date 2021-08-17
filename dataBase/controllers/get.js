const client = require('../index.js');

const getQuestions = ({product_id, page, count}, callback) => {

}


module.exports = {
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
