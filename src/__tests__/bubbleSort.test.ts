import {describe, expect, test} from '@jest/globals';
import bubbleSort from '@code/bubbleSort';

describe('Bubblesort', () => {
  test('Allready sorted', () => {
    expect(bubbleSort([0,2,4])).toEqual([0,2,4]);
  });
  test('Sorts correctly', () => {
    expect(bubbleSort([10, -1, 1111, 0, 13])).toEqual([-1,0,10,13,1111]);
  });
});