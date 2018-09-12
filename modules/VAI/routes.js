const complexity = require('./handlers/complexity/complexity');
const Joi = require('./handlers/complexity/complexityJoi');
// API server endpoints
exports.endPoints = [
  {
    method: 'POST',
    path: '/complexity',
    handler: complexity.display.handler,
    options: Joi.options
  }
];
