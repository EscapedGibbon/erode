/**
 * A function that erodes image
 * @param {array} image - an image that will go through binary erosion
 * @returns {array}
 */

function erode(image) {
  const imageCopy = JSON.parse(JSON.stringify(image));

  const imageCopy2 = JSON.parse(JSON.stringify(image));

  for (let i = 1; i < imageCopy.length - 1; ++i) {
    for (let j = 1; j < imageCopy.length - 1; ++j) {
      if (
        imageCopy[i][j] === 255 &&
        imageCopy[i - 1][j - 1] === 255 &&
        imageCopy[i - 1][j] === 255 &&
        imageCopy[i - 1][j + 1] === 255 &&
        imageCopy[i][j + 1] === 255 &&
        imageCopy[i + 1][j + 1] === 255 &&
        imageCopy[i + 1][j] === 255 &&
        imageCopy[i + 1][j - 1] === 255 &&
        imageCopy[i][j - 1] === 255
      ) {
        imageCopy2[i][j] = 255;
      } else {
        imageCopy2[i][j] = 0;
      }
    }
  }
  for (let i = 0; i < imageCopy.length; ++i) {
    for (let j = 0; j < imageCopy.length; ++j) {
      if (
        i === 0 ||
        i === imageCopy.length - 1 ||
        j === 0 ||
        j === imageCopy.length - 1
      ) {
        imageCopy2[i][j] = 0;
      }
    }
  }

  return imageCopy2;
}

module.exports = erode;
