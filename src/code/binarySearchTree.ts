export default class BinarySeachTree<T> {
    private head: BinaryTree<T> | null;

    constructor() {
        this.head = null;
    }

    search(needle: T): boolean {
        return this.dfs(this.head, needle)?.value ? true : false;
    }

    findMinimum(): T | null {
        return this.findMinNode(this.head)?.value || null;
    }

    private findMinNode(node: BinaryTree<T> | null): BinaryTree<T> | null {
        if (!node) {
            return null;
        }

        if (node.left === null) return node;
        else return this.findMinNode(node.left);
    }

    insert(item: T): void {
        const node: BinaryTree<T> = { value: item, right: null, left: null };

        if (!this.head) {
            this.head = node;
        } else {
            this.insertTree(this.head, node);
        }
    }

    private insertTree(tree: BinaryTree<T>, node: BinaryTree<T>): void {
        if (node.value <= tree.value) {
            if (!tree.left) {
                tree.left = node;
            } else {
                this.insertTree(tree.left, node);
            }
        } else {
            if (!tree.right) {
                tree.right = node;
            } else {
                this.insertTree(tree.right, node);
            }
        }
        return;
    }

    remove(data: T): void {
        this.head = this.removeNode(this.head, data);
    }

    removeNode(node: BinaryTree<T> | null, key: T) {
        if (node === null) return null;
        else if (key < node.value) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.value) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            const min = this.findMinNode(node.right);

            if (!min) {
                throw new Error("should not happen");
            }

            node.value = min.value;

            node.right = this.removeNode(node.right, min.value);
            return node;
        }
    }

    private dfs(tree: BinaryTree<T> | null, needle: T): BinaryTree<T> | null {
        if (!tree) {
            return null;
        }
        if (tree.value === needle) {
            return tree;
        }
        if (needle < tree.value) {
            return this.dfs(tree.left, needle);
        } else {
            return this.dfs(tree.right, needle);
        }
    }
}
