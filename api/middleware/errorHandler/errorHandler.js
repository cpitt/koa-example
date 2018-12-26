const Boom = require('boom');

const boomify = err => {
  if (Boom.isBoom(err)) return err;
  return Boom.boomify(err, { statusCode: err.statusCode || err.status || 500 });
};

/**
 * Automatically catches thrown errors and responds to request with json error
 * payload
 * @param {Object} ctx Koa context
 * @param {function} next next middleware function
 */
async function errorHandler(ctx, next) {
  try {
    await next();
    if (ctx.status === 404) {
      throw Boom.notFound();
    }
  } catch (err) {
    const boom = boomify(err);
    ctx.status = boom.output.statusCode;
    ctx.body = boom.output.payload;
    ctx.app.emit('error', err, ctx);
  }
}

module.exports = errorHandler;
