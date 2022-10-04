import { test, expect } from "@jest/globals";
import dijkstra from "@code/dijkstraList";
import { list1 } from "./graph";

test("dijkstra via adj list", function () {
    expect(dijkstra(0, 6, list1)).toEqual([0, 1, 4, 5, 6]);
});
