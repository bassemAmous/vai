
const Joi = require('joi');

const handleError = function handleError(request, h, err) {
  if (err.isJoi && Array.isArray(err.details) && err.details.length > 0) {
    const invalidItem = err.details[0];
    return h.response(`Data Validation Error. Schema violation. <${invalidItem.path}> \nDetails: ${JSON.stringify(err.details)}`)
      .code(400)
      .takeover();
  }


  return h.response(err)
    .takeover();
};
module.exports = {
  options: {
    validate: {
      payload: Joi.object({
        text: Joi.string().min(1).required()
      }),
      failAction: handleError
    }
  }
};
