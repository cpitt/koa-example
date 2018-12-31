const sharp = require('sharp');
const path = require('path');
const bufferToFile = require('./bufferToFile');
const generateOutputFilename = require('./generateOutputFilename');

/**
 * Resizes image and saves to output dir
 * @param {string} input path to input file
 * @param {outDir} outputDir path to output directory
 * @param {Object} options resize options
 * @param {int} options.width new image width
 * @param {int} options.height new image height
 * @return {Object} object with image information
 */
async function resizeImage(
  input,
  outputDir,
  options = { width: null, height: null, fit: sharp.fit.contain },
) {
  // Save image to buffer first so we can get new image info for file nale
  const imageBuffer = await sharp(input)
    .resize({ ...options })
    .toBuffer({ resolveWithObject: true });

  const outputFilename = generateOutputFilename(
    input,
    imageBuffer.info.width,
    imageBuffer.info.height,
  );

  await bufferToFile(path.resolve(outputDir, outputFilename), imageBuffer.data);

  return { resizedImage: outputFilename, ...imageBuffer.info };
}

module.exports = resizeImage;
