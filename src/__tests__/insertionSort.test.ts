import { describe, expect, test } from "@jest/globals";
import insertionSort from "@code/insertionSort";

describe("Insertion Sort", () => {
    test("Allready sorted", () => {
        const arr = [0, 2, 4];
        insertionSort(arr);
        expect(arr).toEqual([0, 2, 4]);
    });
    test("Sorts correctly", () => {
        const arr = [10, -1, 1111, 0, 13];
        insertionSort(arr);
        expect(arr).toEqual([-1, 0, 10, 13, 1111]);
    });
});
