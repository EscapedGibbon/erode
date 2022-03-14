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
