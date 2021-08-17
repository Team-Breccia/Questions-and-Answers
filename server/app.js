const express = require('express');
const app = express();

const db = require ('../dataBase/controllers/get.js');


app.get('/', (req, res) => {
  res.send('Hello, I am a server and I appear to be working')
});

app.get('/qa/questions', (req, res) => {
  res.send('Hello, I am a server and I appear to be working')
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  res.send('Hello, I am a server and I appear to be working')
});

app.post('/qa/questions', (req, res) => {
  res.send('Hello, I am a server and I appear to be working')
});

app.post('/qa/questions/:question_id/answers', (req, res) => {
  res.send('Hello, I am a server and I appear to be working')
});

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  res.send('Hello, I am a server and I appear to be working')
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