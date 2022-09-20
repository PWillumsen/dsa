import {describe, expect, test} from '@jest/globals';
import binarySearch from '@code/binarySearch';

describe('Binary search', () => {
  test('Value is not in array', () => {
    expect(binarySearch([0,2,4], -5)).toBe(-1);
  });
  test('Value is not in array', () => {
    expect(binarySearch([0,2,4], 5)).toBe(-1);
  });
  test('Value is in array', () => {
    expect(binarySearch([0,2,4], 4)).toBe(2);
  });
});
