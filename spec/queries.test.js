const axios = require("axios");

test('get questions endpoint', () => {
  axios.get('localhost:3001/qa/questions')
    .then (r => {
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(300);
    })
    .catch(err => {
      throw err;
    })
});

test('get answers endpoint', () => {
  axios.get('localhost:3001/qa/questions/456/answers')
    .then (r => {
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(300);
    })
    .catch(err => {
      throw err;
    })
});

test('post question endpoint', () => {
  axios.post('localhost:3001/qa/questions')
    .then (r => {
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(300);
    })
    .catch(err => {
      throw err;
    })
});

test('post answer endpoint', () => {
  axios.post('localhost:3001/qa/questions/546/answers')
    .then (r => {
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(300);
    })
    .catch(err => {
      throw err;
    })
});

test('helpful question endpoint', () => {
  axios.put('localhost:3001/qa/questions/4/helpful')
    .then (r => {
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(300);
    })
    .catch(err => {
      throw err;
    })
});

test('report question endpoint', () => {
  axios.put('localhost:3001/qa/questions/2/report')
    .then (r => {
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(300);
    })
    .catch(err => {
      throw err;
    })
});

test('helpful answer endpoint', () => {
  axios.put('localhost:3001/qa/answers/3545/helpful')
    .then (r => {
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(300);
    })
    .catch(err => {
      throw err;
    })
});

test('report answers endpoint', () => {
  axios.put('localhost:3001/qa/answers/355/report')
    .then (r => {
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(300);
    })
    .catch((err) => {
      throw err;
    })
});

