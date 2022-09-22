function walk<T>(node: BinaryNode<T> | undefined, path: T[]): T[] {
    if (!node) {
        return path;
    }

    walk(node.left, path);
    walk(node.right, path);
    path.push(node.value);

    return path;
}

export default function postOrderSearch<T>(head: BinaryNode<T>): T[] {
    return walk(head, []);
}
