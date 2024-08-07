type ListNode<T> = {
    value: T;
    next: ListNode<T> | null;
};

type BinaryTree<T> = {
    value: T;
    left: BinaryTree<T> | null;
    right: BinaryTree<T> | null;
};

type CompleteGraphEdge = {
    from: number;
    to: number;
    weight: number;
};

type GraphEdge = {
    to: number;
    weight: number;
};

type WeightedAdjacencyList = GraphEdge[][];

type WeightedAdjacencyMatrix = number[][];
