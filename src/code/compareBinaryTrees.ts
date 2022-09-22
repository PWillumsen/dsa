export default function compareBinaryTrees<T>( a: BinaryNode<T> | undefined, b: BinaryNode<T> | undefined, ): boolean {
    if (a === undefined && b === undefined) {
        return true;
    }

    // exclusive or, because of previous if statement
    if (a === undefined || b === undefined) {
        return false;
    }

    if (a.value !== b.value) {
        return false;
    }

    return compareBinaryTrees(a.left, b.left) && compareBinaryTrees(a.right, b.right);
}
