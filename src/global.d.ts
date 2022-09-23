type ListNode<T> = {
    value: T;
    next: ListNode<T> | null;
};

type BinaryTree<T> = {
    value: T;
    left: BinaryTree<T> | null;
    right: BinaryTree<T> | null;
};
