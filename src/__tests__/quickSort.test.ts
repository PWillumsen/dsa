import { test, expect } from "@jest/globals";
import quickSort from "@code/quickSort";

test("Quick sort", function () {
    const arr = [9, 3, -1, 7, 4, 69, 420, 42];

    quickSort(arr);
    expect(arr).toEqual([-1, 3, 4, 7, 9, 42, 69, 420]);
});
