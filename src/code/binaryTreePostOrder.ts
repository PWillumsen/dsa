function walk<T>(node: BinaryTree<T> | null, path: T[]): T[] {
    if (!node) {
        return path;
    }

    walk(node.left, path);
    walk(node.right, path);
    path.push(node.value);

    return path;
}

export default function postOrderSearch<T>(head: BinaryTree<T>): T[] {
    return walk(head, []);
}
