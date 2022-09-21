import Queue from "@code/queue";

export default function bfs<T>(head: BinaryNode<T>, needle: T): boolean {
    const q = new Queue<BinaryNode<T> | null>();
    q.enqueue(head);

    while (q.length) {
        const node = q.deque() as BinaryNode<T>;

        if (!node) {
            continue;
        }

        if (node.value === needle) {
            return true;
        }
        q.enqueue(node.left);
        q.enqueue(node.right);
    }

    return false;
}
