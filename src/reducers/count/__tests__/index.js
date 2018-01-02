import reducer from '../index.js';
test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(0);
});
test('should increase properly', () => {
  expect(reducer(0, { type: 'count:increase' })).toEqual(1);
});
