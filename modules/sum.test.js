const { stringLength, Calc, reverseString, capitalize } = require("./sum.js");

test("string is >= 1 and <= 10", () => {
  const name = "Elhama";
  const lastName = "tokhi";
  expect(stringLength(name)).toBeGreaterThan(1);
  expect(stringLength(lastName)).toBeLessThanOrEqual(10);
});

test("This is a reversed string", () => {
  const name = "Elhama";
  const reversedName = "amahlE";

  expect(reverseString(name)).toBe(reversedName);
});

describe("Calculator tester", () => {
  const n1 = 19;
  const n2 = 20;

  const calc = new Calc(n1, n2);

  test("Test addition", () => {
    const addedNums = n1 + n2;
    expect(calc.add()).toBe(addedNums);
  });

  test("Test subtraction", () => {
    const subNums = n1 - n2;
    expect(calc.subtract()).toBe(subNums);
  });

  test("Test multiplication", () => {
    const multiplyNums = n1 * n2;
    expect(calc.multiply()).toBe(multiplyNums);
  });

  test("Test subtraction", () => {
    const divideNums = n1 / n2;
    expect(calc.divide()).toBe(divideNums);
  });

  test("Test power", () => {
    const powerNums = Math.pow(n1, n2);
    expect(calc.power()).toBe(powerNums);
  });
});

test("Check if the string is capitalized", () => {
  const name = "elhama";
  const nameCapitallized = "Elhama";
  expect(capitalize(name)).toBe(nameCapitallized);
});
