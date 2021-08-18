const express = require('express');
const app = express();
const db = require ('../dataBase/controllers/get.js');

app.use(express.json());

app.get('/qa/questions', (req, res) => {
  var obj = {
    product_id: req.query.product_id,
    page: req.query.page || 1,
    count: req.query.count || 5
  }

  db.getQuestions(obj, (err, result) => {
    if (err) {
      throw err;
    } else {
      var data = {
        "question": result.product_id,
        "results": []
      };

      result.rows.forEach((byte) => {

        var snippet = {
          "question_id": byte.id,
          "question_body": byte.body,
          "question_date": byte.date_written,
          "asker_name": byte.asker_name,
          "question_helpfulness": byte.helpful,
          "reported": false,
          "answers": {}
        };

        data.results.push(snippet);
      });

      res.status(200).send(data);
    }
  });

});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  var obj = {
    question_id: req.params.question_id,
    page: req.query.page || 1,
    count: req.query.count || 5
  }

  db.getAnswers(obj, (err, result) => {
    if (err) {
      throw err;
    } else {
      var data = {
        "question": req.params.question_id,
        "page": obj.page,
        "count": obj.count,
        "results": []
      };

      result.rows.forEach((byte) => {
        var snippet = {
          "answer_id": byte.id,
          "body": byte.body,
          "date": byte.date_written,
          "answerer_name": byte.answerer_name,
          "helpfulness": byte.helpful,
          "photos": []
        };

        data.results.push(snippet);
      });

      res.status(200).send(data);
    }
  });
});

app.post('/qa/questions', (req, res) => {
  var obj = {
    'product_id': req.params.product_id,
    'body': req.body.body,
    'name': req.body.name,
    'email': req.body.email
  };

  db.addQuestion (obj, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(201).send('CREATED');
    }
  });
});

app.post('/qa/questions/:question_id/answers', (req, res) => {
  var obj = {
    'question_id': req.params.question_id,
    'body': req.body.body,
    'name': req.body.name,
    'email': req.body.email,
    'photos': req.body.photos
  };

  db.addAnswer(obj, (err, result) => {
    if (err) {
      console.log('i am an error line 47');
      throw err;
    } else {
      res.status(201).send('CREATED');
    }
  });
});

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  db.helpfulQuestion(req.params.question_id, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(204).send('NO CONTENT');
    }
  });
});

app.put('/qa/questions/:question_id/report', (req, res) => {
  db.reportQuestion(req.params.question_id, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(204).send('NO CONTENT');
    }
  });
});

app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  db.helpfulAnswer(req.params.answer_id, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(204).send('NO CONTENT');
    }
  });
});

app.put('/qa/answers/:answer_id/report', (req, res) => {
  db.reportAnswer(req.params.answer_id, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(204).send('NO CONTENT');
    }
  });
});




module.exports = app;