const client = require('../index.js');

const getQuestions = ({product_id, page, count}, callback) => {

}


module.exports = {
  reportAnswer: (answer_id, callback) => {
    var answer_id = parseInt(answer_id);
    var pgsql = `UPDATE answers SET reported = reported + 1 WHERE id = ${answer_id}`;
    client.query(pgsql)
    .then(data => {callback (null, true)})
    .catch(err => {callback (err)});
  }
}
