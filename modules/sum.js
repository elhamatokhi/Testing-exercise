// Test 1

const stringLength = (string) => {
  const length = string.length;

  if (length < 1 || length > 10) {
    throw new Error("The number is not in range");
  }
  return length;
};

//Test 2  ---

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

// Test 3

class Calc {
  constructor(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;
  }

  subtract() {
    return this.n1 - this.n2;
  }

  add() {
    return this.n1 + this.n2;
  }

  multiply() {
    return this.n1 * this.n2;
  }

  divide() {
    return this.n1 / this.n2;
  }
  power() {
    return Math.pow(this.n1, this.n2);
  }
}

exports.reverseString = reverseString;
exports.stringLength = stringLength;
exports.Calc = Calc;

