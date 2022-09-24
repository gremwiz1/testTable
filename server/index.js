const express = require('express')
const cors = require('cors');
const app = express()
const port = 8080

app.use(
  cors({
    origin: [
      'http://localhost:3000'
    ],
    methods: 'GET',
  })
);
app.get('/api/data-table', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(require('./data.json'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
