const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello, I am a server and I appear to be working')
})

app.listen(3001);