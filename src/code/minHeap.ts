export default class MinHeap<T> {
    public length: number;
    private data: T[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: T): void {
        this.data.push(value);
        this.bubbleUp(this.length);
        this.length++;
    }

    extract_min(): T | undefined {
        let min;

        if (this.length === 0) {
            return undefined;
        } else {
            this.length--;
            min = this.data[0];
            this.data[0] = this.data[this.length];
            this.bubbleDown(0);
        }
        return min;
    }

    static makeHeap<T>(l: T[]): MinHeap<T> {
        const h = new MinHeap<T>();
        for (const e of l) {
            h.insert(e);
        }
        return h;
    }

    private bubbleUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const p = this.parent(idx);
        const pVal = this.data[p];

        if (this.data[idx] < pVal) {
            this.data[p] = this.data[idx];
            this.data[idx] = pVal;
            this.bubbleUp(p);
        }
    }

    private bubbleDown(idx: number): void {
        const c = this.child(idx);
        let minIndex = idx;

        for (let i = 0; i <= 1; i++) {
            if (c + i <= this.length) {
                if (this.data[minIndex] > this.data[c + i]) {
                    minIndex = c + i;
                }
            }
        }

        if (minIndex != idx) {
            const tmp = this.data[idx];
            this.data[idx] = this.data[minIndex];
            this.data[minIndex] = tmp;
            this.bubbleDown(minIndex);
        }
    }
    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
    private child(idx: number): number {
        return 2 * idx + 1;
    }
}
