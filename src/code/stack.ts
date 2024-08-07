export default class Stack<T> {
    public length: number;
    private head: ListNode<T> | null;

    constructor() {
        this.length = 0;
        this.head = null;
    }

    push(item: T): void {
        this.length++;
        const node: ListNode<T> = { value: item, next: this.head };
        this.head = node;
    }

    pop(): T | null {
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
