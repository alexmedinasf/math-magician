import operate from '../operate';

describe('Testing operate API sum', () => {
  test('The next sum value must be 8', () => {
    expect(parseInt(operate(3, 5, '+'), 5)).toBe(8);
  });
});

describe('Testing operate API subtract', () => {
  test('The next substract value must be 2', () => {
    expect(parseInt(operate(5, 3, '-'), 5)).toBe(2);
  });
});
describe('Testing operate API multiply', () => {
  test('The next  multiply value must be 15', () => {
    expect(parseInt(operate(3, 5, 'x'), 5)).toBe(15);
  });
});
describe('Testing operate API division', () => {
  test('The next divition value must be 2', () => {
    expect(parseInt(operate(10, 5, '÷'), 5)).toBe(2);
  });
});
describe('Testing operate API residue', () => {
  test('The next residue value must be 2', () => {
    expect(parseInt(operate(5, 3, '%'), 5)).toBe(2);
  });
});
