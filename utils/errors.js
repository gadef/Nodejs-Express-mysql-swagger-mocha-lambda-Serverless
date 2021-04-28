const response = require('./response');
const { isCelebrateError } = require('celebrate');

function errors(err, req, res, next) {
  var message = err.message || 'Error interno';
  var status = err.statusCode || 500;

  if (isCelebrateError(err)) {
    let validation = '';
    for (const [segment, joiError] of err.details.entries()) {
      validation = joiError.message;
    }
    message = validation;
    status = 401;
  }

  response.error(req, res, message, status);
}

module.exports = errors;
