/**
 *
 * @param arr - Array to search on.
 * @param needle - The searched number.
 * @returns {boolean} boolean - Whether the number is found or not.
 */
export default function bs_list(arr: number[], needle: number): boolean {
  let low = 0;
  let high = arr.length;
  do {
    const m = Math.floor(low + (high - low) / 2);
    const v = arr[m];

    if (v === needle) {
      return true;
    } else if (v > needle) {
      high = m;
    } else {
      low = m + 1;
    }
  } while (low < high);
  return false;
}

// high is exclusive. low is inclusive. [low, high)
// example:
// arr = [1,2,3,4,5,6,7,8,9,10]
// n = 9
// m = Math.floor(low + (high - low) / 2)
// checked if n = arr[m]
// not equal? but bigger? the start from *6*, means start from  m + 1. because 5 is checked (middle).
// not equal? but smaller? take the high to m. so end with 5. to divide the array length by 2s
