const path = require('path');
const listFiles = require('../../../../utils/listFiles');

async function listImagesController(ctx) {
  const imagePath = path.resolve(__dirname, '../../../../images/original');
  const images = await listFiles(imagePath);
  ctx.body = {
    count: images.length,
    images,
  };
}

module.exports = listImagesController;
