export default function two_crystal_balls(breaks: boolean[]): number {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jmpAmount;
  for (; i < breaks.length; i += jmpAmount) {
    console.log(i);
    if (breaks[i]) {
      break;
    }
  }
  i -= jmpAmount;

  for (let j = 0; j < jmpAmount && i < breaks.length; j++, i++) {
    console.log(i);
    if (breaks[i]) {
      return i;
    }
  }
  return -1;
}

const array = [];
for (let k = 0; k < 200; ++k) {
  if (k > 115) {
    array.push(true);
  } else {
    array.push(false);
  }
}
console.log(two_crystal_balls(array));
