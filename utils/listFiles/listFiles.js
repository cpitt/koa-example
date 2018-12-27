const fs = require('fs');

const filterHidden = file => !/^\./.test(file);

function listFiles(directory) {
  return new Promise((resolve, reject) => {
    fs.readdir(directory, (err, files) => {
      if (err) {
        return reject(err);
      }
      return resolve(files);
    });
  }).then(files => files.filter(filterHidden));
}

module.exports = listFiles;
