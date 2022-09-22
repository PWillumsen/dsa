type DoubleEndedNode<T> = {
    value: T;
    next: DoubleEndedNode<T> | null;
    prev: DoubleEndedNode<T> | null;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head: DoubleEndedNode<T> | null;
    private tail: DoubleEndedNode<T> | null;

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    get(idx: number): T | null {
        return this.getAt(idx)?.value || null;
    }

    private getAt(idx: number): DoubleEndedNode<T> | null {
        let curr = this.head;
        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }
        return curr;
    }

    prepend(item: T): void {
        const node: DoubleEndedNode<T> = { value: item, next: null, prev: null };

        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    append(item: T): void {
        this.length++;
        const node: DoubleEndedNode<T> = { value: item, next: null, prev: null };

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("index cannot be greater than length");
        } else if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }
        this.length++;
        const curr = this.getAt(idx) as DoubleEndedNode<T>;
        const node: DoubleEndedNode<T> = { value: item, next: null, prev: null };

        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;

        if (node.prev) {
            node.prev.next = node;
        }
    }

    removeValue(item: T): T | null {
        let curr = this.head;
        for (let i = 0; i < this.length && curr; i++) {
            if (curr.value === item) {
                break;
            }
            curr = curr.next;
        }
        if (!curr) {
            return null;
        }

        return this.removeNode(curr);
    }
    removeAt(idx: number): T | null {
        const node = this.getAt(idx);

        if (!node) {
            return null;
        }

        return this.removeNode(node);
    }

    private removeNode(node: DoubleEndedNode<T>): T | null {
        this.length--;

        if (this.length === 0) {
            // const out = this.head?.value;
            this.head = this.tail = null;
            return node.value;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = node.prev;
        }

        node.prev = node.next = null;

        return node.value;
    }
}
