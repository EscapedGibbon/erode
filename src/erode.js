/**
 * A function that erodes image
 * @param {array} image - an image that will go through binary erosion
 * @returns {array}
 */

export function erode(image) {
  const imageTarget = JSON.parse(JSON.stringify(image));

  const erodedImage = JSON.parse(JSON.stringify(image));

  for (let i = 1; i < imageTarget.length - 1; ++i) {
    for (let j = 1; j < imageTarget.length - 1; ++j) {
      if (
        imageTarget[i][j] === 255 &&
        imageTarget[i - 1][j - 1] === 255 &&
        imageTarget[i - 1][j] === 255 &&
        imageTarget[i - 1][j + 1] === 255 &&
        imageTarget[i][j + 1] === 255 &&
        imageTarget[i + 1][j + 1] === 255 &&
        imageTarget[i + 1][j] === 255 &&
        imageTarget[i + 1][j - 1] === 255 &&
        imageTarget[i][j - 1] === 255
      ) {
        erodedImage[i][j] = 255;
      } else {
        erodedImage[i][j] = 0;
      }
    }
  }
  for (let i = 0; i < imageTarget.length; ++i) {
    for (let j = 0; j < imageTarget.length; ++j) {
      if (
        i === 0 ||
        i === imageTarget.length - 1 ||
        j === 0 ||
        j === imageTarget.length - 1
      ) {
        erodedImage[i][j] = 0;
      }
    }
  }

  return erodedImage;
}
