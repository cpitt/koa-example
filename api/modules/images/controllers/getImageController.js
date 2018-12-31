const send = require('koa-send');

function createGetImageController(imagePath) {
  return async ctx => {
    const { imageName } = ctx.params;
    await send(ctx, imageName, { root: imagePath });
  };
}

module.exports = createGetImageController;
