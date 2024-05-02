export default function linearSearch(arr: number[], needle: number): boolean {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === needle) {
      return true;
    }
  }
  return false;
}

console.log(linearSearch([4, 8, 7, 8, 7, 9, 9, 9, 8, 9], 5));
