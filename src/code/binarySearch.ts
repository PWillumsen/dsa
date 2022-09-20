export default function binarySearch<T>(l: T[], val: T): number {
  let lo = 0;
  let hi = l.length;

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (l[mid] < val) {
      lo = mid + 1;
    } else if (l[mid] > val) {
      hi = mid;
    } else {
      return mid;
    }
  }
  return -1;
}
