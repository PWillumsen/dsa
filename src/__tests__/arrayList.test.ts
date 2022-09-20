import { test, expect } from "@jest/globals";
import ArrayList from "@code/arrayList";

test("array-list", function () {
  const list = new ArrayList<number>(3);
  list.append(5); // [5]
  list.append(7); // [5,7]
  list.append(9); // [5,7,9]

  expect(list.get(2)).toEqual(9); // [5,7,9]
  expect(list.removeAt(1)).toEqual(7); // [5,9]
  expect(list.length).toEqual(2); // [5,9]

  list.append(11); // [5,9,11]
  expect(list.removeAt(1)).toEqual(9); // [5,11]
  expect(list.removeValue(9)).toEqual(undefined); //[5,11]
  expect(list.removeAt(0)).toEqual(5); // [11]
  expect(list.removeAt(0)).toEqual(11); // []
  expect(list.length).toEqual(0); // []

  list.prepend(5); // [5]
  list.prepend(7); // [7, 5]
  list.prepend(9); // [9, 7, 5]

  expect(list.get(2)).toEqual(5);
  expect(list.get(0)).toEqual(9);
  expect(list.removeValue(9)).toEqual(9);
  expect(list.length).toEqual(2);
  expect(list.get(0)).toEqual(7);

  list.append(5);
  list.append(6);
  list.append(7);
  list.append(8);
  list.append(9);
  list.append(10);
  expect(list.length).toEqual(8);

  expect(list.get(100)).toEqual(undefined);
});
