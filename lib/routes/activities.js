const { Router } = require('express');
const Activity = require('../models/Activity');

module.exports = Router()
  .post('/blocks', (req, res, next) => {
    Activity
      .create(req.body)
      .then(activity => res.send(activity))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Activity
      .find()
      .then(activities => res.send(activities))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Activity
      .findById(req.params.id)
      .then(activity => res.send(activity))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    Activity
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(activity => res.send(activity))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Activity
      .findByIdAndDelete(req.params.id)
      .then(activity => res.send(activity))
      .catch(next);
  });

