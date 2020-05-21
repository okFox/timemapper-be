const express = require('express');
const app = express();

app.use(express.json());
app.use(require('cors')({
  origin: true,
  credentials: true
}));

app.use('/api/v1/activities', require('./routes/activities'));
app.use('/api/v1/blocks'), require('./routes/blocks');

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
