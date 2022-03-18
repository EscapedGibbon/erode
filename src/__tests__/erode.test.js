import { erode } from '../erode';

describe('test erode', () => {
  it('testOne', () => {
    const data = [
      [255, 255, 255, 255, 255],
      [0, 255, 255, 255, 255],
      [255, 255, 255, 0, 255],
      [255, 255, 255, 0, 255],
      [255, 255, 255, 255, 255],
    ];

    expect(erode(data)).toStrictEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 255, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
  });

  it('testTwo', () => {
    const data = [
      [0, 255, 255, 255, 255],
      [0, 255, 255, 255, 255],
      [255, 0, 255, 0, 255],
      [255, 255, 255, 0, 255],
      [255, 255, 255, 255, 255],
    ];

    expect(erode(data)).toStrictEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
  });

  it('testThree', () => {
    const data = [
      [255, 255, 255, 255, 255],
      [255, 255, 255, 255, 255],
      [255, 255, 255, 0, 0],
      [255, 255, 255, 255, 255],
      [255, 255, 255, 255, 255],
    ];

    expect(erode(data)).toStrictEqual([
      [0, 0, 0, 0, 0],
      [0, 255, 0, 0, 0],
      [0, 255, 0, 0, 0],
      [0, 255, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
  });
});
