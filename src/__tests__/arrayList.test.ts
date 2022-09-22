import { test, expect } from "@jest/globals";
import ArrayList from "@code/arrayList";

test("array-list", function () {
    const list = new ArrayList<number>(3);
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.get(2)).toEqual(9);
    expect(list.removeAt(1)).toEqual(7);
    expect(list.length).toEqual(2);

    list.append(11);
    expect(list.removeAt(1)).toEqual(9);
    expect(list.removeValue(9)).toEqual(null);
    expect(list.removeAt(0)).toEqual(5);
    expect(list.removeAt(0)).toEqual(11);
    expect(list.length).toEqual(0);

    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

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

    expect(list.get(100)).toEqual(null);
});
