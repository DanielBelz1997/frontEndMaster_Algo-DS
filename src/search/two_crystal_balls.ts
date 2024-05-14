export default function two_crystal_balls(breaks: boolean[]): number {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jmpAmount;
  for (; i < breaks.length; i += jmpAmount) {
    if (breaks[i]) {
      break;
    }
  }
  i -= jmpAmount;

  for (let j = 0; j < jmpAmount && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }
  return -1;
}

// running time: O(root of n)

export function copy(arr: boolean[]): number {
  const jmpAmount = Math.floor(Math.sqrt(arr.length));

  let i = jmpAmount;

  for (; i < arr.length; i += jmpAmount) {
    if (arr[i]) {
      break;
    }
  }
  i -= jmpAmount;

  for (let j = 0; j < jmpAmount && i < arr.length; ++j, ++i) {
    if (arr[i]) {
      return i;
    }
  }
  return -1;
}
