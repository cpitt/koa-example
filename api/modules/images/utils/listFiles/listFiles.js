const fs = require('fs');
const path = require('path');

const filterHidden = file => !/^\./.test(file);

const filterPermittedExtensions = (files, permittedExtensions) =>
  files.filter(file =>
    permittedExtensions.includes(path.extname(file).toLowerCase()),
  );

/**
 * Lists files in given directory
 * @param {string} directory directory to list files for
 * @param {Object} [options] extra options
 * @param {string[]} [options.permittedExtensions=[]] file extensions to whitelist
 * @return {string[]} array of file names
 */
function listFiles(directory, options = { permittedExtensions: [] }) {
  return new Promise((resolve, reject) => {
    fs.readdir(directory, (err, files) => {
      if (err) {
        return reject(err);
      }
      return resolve(files);
    });
  })
    .then(files => files.filter(filterHidden))
    .then(files => {
      if (!options.permittedExtensions.length) return files;
      return filterPermittedExtensions(files, options.permittedExtensions);
    });
}

module.exports = listFiles;
