const { Router } = require('express');
const Block = require('../models/Block');

module.exports = Router()
  .post('/blocks', (req, res, next) => {
    Block
      .create(req.body)
      .then(block => res.send(block))
      .catch(next);
  })

  .get('/blocks', (req, res, next) => {
    Block
      .find()
      .then(blocks => res.send(blocks))
      .catch(next);
  })

  .get('/blocks/:id', (req, res, next) => {
    Block
      .findById(req.params.id)
      .then(block => res.send(block))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    Block
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(block => res.send(block))
      .catch(next);
  })
  .delete('/blocks/:id', (req, res, next) => {
    Block
      .findByIdAndDelete(req.params.id)
      .then(block => res.send(block))
      .catch(next);
  });
