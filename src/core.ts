function addTwoNumbers(x: number, y: number) {
  return x + y;
}

function subtractTwoNumbers(x: number, y: number) {
  if (x > y) {
    return x - y;
  } else {
    return y - x;
  }
}

function multiplyTwoNumbers(x: number, y: number) {
  return x * y;
}

function divideTwoNumbers(x: number, y: number) {
  return x / y;
}

function shoutLily() {
  return "lily";
}

export {
  addTwoNumbers,
  subtractTwoNumbers,
  multiplyTwoNumbers,
  divideTwoNumbers,
  shoutLily,
};
