function walk<T>(node: BinaryNode<T> | undefined, path: T[]): T[] {
    if (!node) {
        return path;
    }

    walk(node.left, path);
    path.push(node.value);
    walk(node.right, path);

    return path;
}

export default function inOrderSearch<T>(head: BinaryNode<T>): T[] {
    return walk(head, []);
}
