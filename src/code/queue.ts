export default class Queue<T> {
    public length: number;
    private head: ListNode<T> | null;
    private tail: ListNode<T> | null;

    constructor() {
        this.tail = this.head = null;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node: ListNode<T> = { value: item, next: null };
        this.length++;
        if (!this.head) {
            this.head = this.tail = node;
        } else if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.tail = node;
        }
    }

    deque(): T | null {
        if (!this.head) {
            return null;
        }

        this.length--;

        const head = this.head;
        this.head = this.head.next || null;

        return head.value;
    }

    peek(): T | null {
        return this.head?.value || null;
    }
}
