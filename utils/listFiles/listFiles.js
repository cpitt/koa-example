const path = require('path');
const fs = require('fs').promises;

const filterHidden = file => !/^\./.test(file);

async function listFiles(directory) {
  const files = await fs.readdir(directory);
  return files.filter(filterHidden).map(file => ({
    name: file,
    extension: path.extname(path.resolve(directory, file)),
    stats: fs.stat(path.resolve(directory, file)),
  }));
}

module.exports = listFiles;
