function walk<T>(node: BinaryTree<T> | null, path: T[]): T[] {
    if (!node) {
        return path;
    }

    walk(node.left, path);
    path.push(node.value);
    walk(node.right, path);

    return path;
}

export default function inOrderSearch<T>(head: BinaryTree<T>): T[] {
    return walk(head, []);
}
