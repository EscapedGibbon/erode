/**
 * A function that erodes image
 * @param {array} image - an image that will go through binary erosion
 * @returns {array}
 */
import erode from '../index';

describe('test erode', () => {
  it('testOne', () => {
    const data = [
      [255, 255, 255, 255, 255],
      [0, 255, 255, 255, 255],
      [255, 255, 255, 0, 255],
      [255, 255, 255, 0, 255],
      [255, 255, 255, 255, 255],
    ];
    let answer = erode(data);

    expect(answer).toBe(answer);
  });

  it('testTwo', () => {
    const data = [
      [0, 255, 255, 255, 255],
      [0, 255, 255, 255, 255],
      [255, 0, 255, 0, 255],
      [255, 255, 255, 0, 255],
      [255, 255, 255, 255, 255],
    ];
    let answer = erode(data);

    expect(answer).toBe(answer);
  });

  it('testTwo', () => {
    const data = [
      [255, 255, 255, 255, 255],
      [255, 255, 255, 255, 255],
      [255, 255, 255, 0, 255],
      [255, 255, 255, 255, 255],
      [255, 255, 255, 255, 255],
    ];
    let answer = erode(data);

    expect(answer).toBe(answer);
  });
});
