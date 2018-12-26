const path = require('path');
const send = require('koa-send');

async function getImage(ctx) {
  const { imageName } = ctx.params;
  await send(
    ctx,
    path.resolve(__dirname, '/../../../../images/original/', imageName),
  );
}

module.exports = getImage;
