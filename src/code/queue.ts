export default class Queue<T> {
    public length: number;
    private head?: ListNode<T>;
    private tail?: ListNode<T>;

    constructor() {
        this.tail = this.head = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node: ListNode<T> = { value: item };
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

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        const head = this.head;
        this.head = this.head.next;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
