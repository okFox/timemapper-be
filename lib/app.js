const express = require('express');
const app = express();

app.use(express.json());
app.use(require('cors')({
  origin: false,
  credentials: false
}));

// app.use('/api/v1/RESOURCE', require('./routes/resource'));
app.use('/api/v1/activities', require('./routes/activities'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
