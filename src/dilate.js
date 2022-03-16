export * from './erode.js';

export default function dilate(image) {
  for (let i = 0; i < image.length; ++i) {
    image[i].unshift(0);
    image[i].push(0);
  }
  image.unshift(image[0]);
  image.push(image[0]);
  const dilatedImage = JSON.parse(JSON.stringify(image));

  for (let i = 1; i < image.length - 1; ++i) {
    for (let j = 1; j < image[i].length - 1; ++j) {
      if (
        image[i - 1][j - 1] === 1 ||
        image[i - 1][j] === 1 ||
        image[i - 1][j + 1] === 1 ||
        image[i][j + 1] === 1 ||
        image[i + 1][j + 1] === 1 ||
        image[i + 1][j] === 1 ||
        image[i + 1][j - 1] === 1 ||
        image[i][j - 1] === 1 ||
        image[i][j] === 1
      ) {
        dilatedImage[i][j] = 1;
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
