import Queue from "@code/queue";

export default function bfs<T>(head: BinaryTree<T>, needle: T): boolean {
    const q = new Queue<BinaryTree<T> | null>();
    q.enqueue(head);

    while (q.length) {
        const node: BinaryTree<T> | null = q.deque();

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
