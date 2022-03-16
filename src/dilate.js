export * from './erode.js';

export default function dilate(image) {
  for (let i = 0; i < image.length; ++i) {
    image[i].unshift(0);
    image[i].push(0);
  }
  let tempArray = [];
  for (let a = 0; a < image[0].length; ++a) {
    tempArray.push(0);
  }

  image.unshift(tempArray);
  image.push(tempArray);
  const dilatedImage = JSON.parse(JSON.stringify(image));

  for (let i = 1; i < image.length - 1; ++i) {
    for (let j = 1; j < image[i].length - 1; ++j) {
      if (
        image[i - 1][j - 1] === 255 ||
        image[i - 1][j] === 255 ||
        image[i - 1][j + 1] === 255 ||
        image[i][j + 1] === 255 ||
        image[i + 1][j + 1] === 255 ||
        image[i + 1][j] === 255 ||
        image[i + 1][j - 1] === 255 ||
        image[i][j - 1] === 255 ||
        image[i][j] === 255
      ) {
        dilatedImage[i][j] = 255;
      }
    }
  }
  dilatedImage.pop();
  dilatedImage.shift();
  for (let i = 0; i < dilatedImage.length; ++i) {
    dilatedImage[i].shift();
    dilatedImage[i].pop();
  }

  return dilatedImage;
}
