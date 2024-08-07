import { test, expect } from "@jest/globals";
import MinHeap from "@code/minHeap";

test("min heap", function () {
    const heap = new MinHeap();

    expect(heap.length).toEqual(0);

    heap.push(5);
    heap.push(3);
    heap.push(69);
    heap.push(420);
    heap.push(4);
    heap.push(1);
    heap.push(8);
    heap.push(7);

    expect(heap.length).toEqual(8);
    expect(heap.pop()).toEqual(1);
    expect(heap.pop()).toEqual(3);
    expect(heap.pop()).toEqual(4);
    expect(heap.pop()).toEqual(5);
    expect(heap.length).toEqual(4);
    expect(heap.pop()).toEqual(7);
    expect(heap.pop()).toEqual(8);
    expect(heap.pop()).toEqual(69);
    expect(heap.pop()).toEqual(420);
    expect(heap.length).toEqual(0);
});
