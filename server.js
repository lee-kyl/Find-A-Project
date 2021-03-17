const express = require('express');
const app = express();
const port = 5000;

app.get('/',(req, res) => {
  res.send('This is backend side of Find A Project')
})

app.listen(port, () => {
  console.log('Server started, listening at localhost:5000');
})
