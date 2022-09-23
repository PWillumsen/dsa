export default function compareBinaryTrees<T>(
    a: BinaryTree<T> | null,
    b: BinaryTree<T> | null,
): boolean {
    if (a === null && b === null) {
        return true;
    }

    // exclusive or, because of previous if statement
    if (a === null || b === null) {
        return false;
    }

    if (a.value !== b.value) {
        return false;
    }

    return compareBinaryTrees(a.left, b.left) && compareBinaryTrees(a.right, b.right);
}
