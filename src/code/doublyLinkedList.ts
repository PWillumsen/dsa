

type Node<T> = {
	value: T,
	next?: Node<T>,
	prev?: Node<T>
}

export default class DoublyLinkedList<T> {
	public length: number;
	private head?: Node<T>
	private tail?: Node<T>

	constructor() {
		this.length = 0;
		this.head = undefined;
		this.tail = undefined;
	}

	get(idx: number): T | undefined {
		return this.getAt(idx)?.value;
	}

	private getAt(idx: number): Node<T> | undefined {
		let curr = this.head;
		for (let i = 0; i < idx && curr; i++) {
			curr = curr.next;
		}
		return curr;
	}

	prepend(item: T): void {
		const node = {value: item} as Node<T>;

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
		const node = {value: item} as Node<T>;

		if (!this.tail) {
			this.head = this.tail = node;
			return;
		}
		node.prev = this.tail;
		this.tail.next = node;
		this.tail = node
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
		let curr = this.head;
		for (let i = 0; curr && i < idx; i++) {
			curr = curr.next;
		}

		curr = curr as Node<T>;
		const node = {value: item} as Node<T>;

		node.next = curr;
		node.prev = curr.prev;
		curr.prev = node;

		if (curr.prev) {
			curr.prev.next = curr;
		}
	}

	removeValue(item: T): T | undefined {

		let curr = this.head;
		for (let i = 0; i < this.length && curr; i++) {

			if (curr.value === item) {
				break;
			}
			curr = curr.next
		}
		if (!curr) {
			return undefined;
		}

		return this.removeNode(curr);
	}
	removeAt(idx: number): T | undefined {

		const node = this.getAt(idx);

		if (!node) {
			return undefined;
		}

		return this.removeNode(node);

	}

	private removeNode(node: Node<T>): T | undefined {

		this.length--;

		if (this.length === 0) {
			// const out = this.head?.value;
			this.head = this.tail = undefined;
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

		node.prev = node.next = undefined;

		return node.value;
	}



}

const list = new DoublyLinkedList<number>();
    list.append(5);
    list.append(7);
    list.append(9);

    list.get(2);
    list.removeAt(1);
    list.length;

    list.append(11);
    list.removeAt(1);
    list.removeValue(9);
    list.removeAt(0);
    list.removeAt(0);
    list.length;

    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    list.get(2);
    list.get(0);
    list.removeValue(9);
    list.length;
    list.get(0);

    list.append(5);
    list.append(6);
    list.append(7);
    list.append(8);
    list.append(9);
    list.append(10);
    list.length;

    list.get(100);