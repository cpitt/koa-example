const Boom = require('boom');

const boomify = err => {
  if (Boom.isBoom(err)) return err;
  return Boom.boomify(err, { statusCode: err.statusCode || err.status || 500 });
};

module.exports = boomify;
