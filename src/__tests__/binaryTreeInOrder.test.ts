import { test, expect } from "@jest/globals";
import bt_in_order from "@code/binaryTreeInOrder";
import { tree } from "./tree";

test("In order", function () {
    expect(bt_in_order(tree)).toEqual([5, 7, 10, 15, 20, 29, 30, 45, 50, 100]);
});
