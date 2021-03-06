/**
  * Build script
  * Dimitris Grammatikogiannis
  */
const fs = require('fs');
const paths = require('../paths.js');
const sizes = require('../sizes.js');

module.exports.buildImages = function (originalImage) {
  sizes.forEach(size => {
    const newFile = originalImage.replace(`${paths.buildSrc}`, `${paths.buildDest}`).replace('.png', `@${size}.png`).replace('.jpg', `@${size}.jpg`)
    const newFile2 = originalImage.replace(`${paths.buildSrc}`, `${paths.buildDest}`).replace('.png', `@${size}.webp`).replace('.jpg', `@${size}.webp`)

    fs.unlinkSync(newFile);
    fs.unlinkSync(newFile2);
  });
};
