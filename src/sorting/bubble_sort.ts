export default function bubble_sort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; ++i) {
    for (
      let j = 0;
      j <
      arr.length -
        1 /* for the last element, couse where doing i > i + 1 ? */ -
        i /* the last element in every iteration is the biggest! */;
      ++j
    ) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      /* or: 
      tmp = arr[j]
      arr[j] = arr[j+1]
      arr[j + 1]= temp
      */
    }
  }

  return arr;
}
