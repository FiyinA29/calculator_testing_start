const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 1200;
    actual = sum(500, 700);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -5;
    actual = sum(-2, -3);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 0;
    actual = sum(0, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test('can subtract two positive numbers', () => {
    expected = 350;
    actual = subtract(500, 150);
    expect(actual).toBe(expected);  
  });
  test('can subtract two negative numbers', () => {
    expected = 5;
    actual = subtract(-10, -15);
    expect(actual).toBe(expected);  
  });
});

describe('multiply', () => {
  test('can multiply two positive numbers', () => {
    expected = 81;
    actual = multiply(9, 9);
    expect(actual).toBe(expected);  
  });
  test('can multiply a postive number by a negative number', () => {
    expected = -49;
    actual = multiply(7, -7);
    expect(actual).toBe(expected);  
  });
});

describe('divide', () => {
  test('can divide two positive numbers', () => {
    expected = 4;
    actual = divide(48, 12);
    expect(actual).toBe(expected);  
  });
  test('can divide a postive number by a negative number', () => {
    expected = -8;
    actual = divide(56, -7);
    expect(actual).toBe(expected);  
  });
});

describe('modulus', () => {
  test('can mod two small numbers', () => {
    expected = 1;
    actual = modulus(5, 2);
    expect(actual).toBe(expected);  
  });
  test('can mod two large numbers', () => {
    expected = 23;
    actual = modulus(650, 33);
    expect(actual).toBe(expected);  
  });
});

describe('even/odd', () => {
  test('can check if number is even', () => {
    expected = even;
    actual = even(48);
    expect(actual).toBe(expected);  
  });
  test('can check if number is e=odd', () => {
    expected = odd;
    actual = even(33);
    expect(actual).toBe(expected);  
  });
});

// describe('odd', () => {
//   test('can check if number is odd', () => {
//     expected = true;
//     actual = odd(99);
//     expect(actual).toBe(expected);  
//   });
//   test('can check if number is odd', () => {
//     expected = false;
//     actual = odd(72);
//     expect(actual).toBe(expected);  
//   });
// });
