function walk<T>(node: BinaryTree<T> | null, path: T[]): T[] {
    if (!node) {
        return path;
    }

    path.push(node.value);
    walk(node.left, path);
    walk(node.right, path);

    return path;
}

export default function preOrderSearch<T>(head: BinaryTree<T>): T[] {
    return walk(head, []);
}
