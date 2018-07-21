const sum = require('./sum')

test('1+2=3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('1+3不等于2', () => {
  expect(sum(1, 3) !== 2).toBeTruthy()
});

test('参数只能传入数字', () => {
  try {
    sum('666', '666')
  } catch (e) {
    expect(e.message).toEqual('必须传入数字')
  }
})
