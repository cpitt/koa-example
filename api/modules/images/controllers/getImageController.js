const send = require('koa-send');
const config = require('../config.js');

async function getImage(ctx) {
  const { imageName } = ctx.params;
  await send(ctx, imageName, { root: config.imagePaths.original });
}

module.exports = getImage;
