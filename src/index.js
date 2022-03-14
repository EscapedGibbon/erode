/**
 * Returns a very important number
 * @return {image}
 */
const testing = [
  [255, 255, 255, 255, 255],
  [0, 255, 255, 255, 255],
  [255, 255, 255, 0, 255],
  [255, 255, 255, 0, 255],
  [255, 255, 255, 255, 255],
];
function erode(image) {
  const Arr = JSON.parse(JSON.stringify(image));

  const Arr2 = JSON.parse(JSON.stringify(image));

  for (let i = 1; i <= Arr.length - 2; ++i) {
    for (let j = 1; j <= Arr.length - 2; ++j) {
      if (
        Arr[i][j] === 255 &&
        Arr[i - 1][j - 1] === 255 &&
        Arr[i - 1][j] === 255 &&
        Arr[i - 1][j + 1] === 255 &&
        Arr[i][j + 1] === 255 &&
        Arr[i + 1][j + 1] === 255 &&
        Arr[i + 1][j] === 255 &&
        Arr[i + 1][j - 1] === 255 &&
        Arr[i][j - 1] === 255
      ) {
        Arr2[i][j] = 255;
      } else {
        Arr2[i][j] = 0;
      }
    }
  }
  for (let i = 0; i <= Arr.length - 1; ++i) {
    for (let j = 0; j <= Arr.length - 1; ++j) {
      if (i === 0 || i === Arr.length - 1 || j === 0 || j === Arr.length - 1) {
        Arr2[i][j] = 0;
      }
    }
  }

  console.log(Arr2);
}
erode(testing);
module.exports = erode;
