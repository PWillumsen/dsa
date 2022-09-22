type ListNode<T> = {
    value: T;
    next: ListNode<T> | null;
};

declare type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};
