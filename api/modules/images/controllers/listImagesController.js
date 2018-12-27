const listFiles = require('../../../../utils/listFiles');
const config = require('../config.js');

async function listImagesController(ctx) {
  const imagePath = config.imagePaths.original;
  const images = await listFiles(imagePath);
  ctx.body = {
    count: images.length,
    images,
  };
}

module.exports = listImagesController;
