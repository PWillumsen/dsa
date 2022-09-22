import Queue from "@code/queue";

export default function bfs<T>(head: BinaryNode<T>, needle: T): boolean {
    const q = new Queue<BinaryNode<T> | undefined>();
    q.enqueue(head);

    while (q.length) {
        const node: BinaryNode<T> | undefined = q.deque();

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
