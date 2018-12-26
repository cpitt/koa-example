const path = require('path');
const send = require('koa-send');
const resizeImage = require('../../../../utils/resizeImage');
const config = require('../../../config.js');

async function resizeImageController(ctx) {
  const original = path.resolve(
    config.imagePaths.original,
    ctx.params.imageName,
  );
  const width = parseInt(ctx.query.width, 10) || null;
  const height = parseInt(ctx.query.height, 10) || null;
  const outputdir = config.imagePaths.resized;
  const resized = await resizeImage(original, outputdir, { width, height });
  return send(ctx, resized, { root: '/' });
}

module.exports = resizeImageController;
