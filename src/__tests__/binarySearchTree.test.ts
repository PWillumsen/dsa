import { test, expect } from "@jest/globals";
import BST from "@code/binarySearchTree";

test("bst", () => {
    const bst = new BST();

    bst.insert(5);
    bst.insert(1);
    bst.insert(33);
    bst.insert(12);
    bst.insert(-1);
    bst.insert(0);
    bst.insert(33333333333333);

    expect(bst.findMinimum()).toEqual(-1);
    expect(bst.search(12)).toEqual(true);
    bst.remove(12);
    expect(bst.search(12)).toEqual(false);
    expect(bst.search(44)).toEqual(false);
});
