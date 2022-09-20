export default class ArrayList<T> {
  public length: number;
  private capacity: number;
  private arr: T[];

  constructor(capacity?: number) {
    this.length = 0;
    this.capacity = capacity || 5;
    this.arr = new Array(this.capacity);
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      throw new Error("idx cannot be greater that array length");
    }

    if (this.length === this.capacity) {
      this.grow();
    }

    for (let i = this.length; i > idx; i--) {
      this.arr[i] = this.arr[i-1];
    }
    this.arr[idx] = item;
    this.length++;
  }

  prepend(item: T): void {
    this.insertAt(item, 0);
  }

  append(item: T): void {
    this.insertAt(item, this.length);
  }

  removeValue(item: T): T | undefined {
    let idx = -1;

    for (let i = 0; i < this.length; i++) {
      if (this.arr[i] === item) {
        idx = i;
      }
    }
    if (idx === -1) {
      return undefined;
    }
    return this.removeAt(idx);
  }

  removeAt(idx: number): T | undefined {
    if (idx > this.length) {
      throw new Error("index out of range");
    }

    const value = this.arr[idx];

    for (let i = idx; i < this.length; i++) {
      this.arr[i] = this.arr[i + 1];
    }
    this.length--;
    return value;
  }

  get(idx: number): T | undefined {
    if (idx > this.length) {
      return undefined;
    }
    return this.arr[idx];
  }

  private grow() {
    this.capacity *= 2;
    const new_arr = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      new_arr[i] = this.arr[i];
    }
    this.arr = new_arr;
  }
}
