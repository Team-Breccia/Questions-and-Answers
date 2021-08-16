const app = require('./endpoints.js');

const port = 3001;

app.listen(port, () => {
  console.log('Success! Server Started!')
});