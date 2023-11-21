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

  test.skip('can add two large positive numbers', () => { 
    
  });

  test.skip('can add two negative numbers', () => {
    
  });

  test.skip('can add zero', () => {
    
  });

});

describe('subtract', () => {
  test('can subtract two small numbers', () => {
    expect(subtract(10,2)).toBe(8);
  })

  test.skip('can subtract two large positive numbers', () => { 
    
  });
});

describe('multiply', () => {
  test('can multiply two small numbers', () =>{
    expect(multiply(3,2)).toBe(6);
});
});

describe('divide', () => {
  test('can divide two small numbers', () =>{
    expect(divide(10,2)).toBe(5);
});
});

describe('modulus', () => {
  test('can calculate modulus', () =>{
    expect(modulus(3,2)).toBe(1);
});
});

describe('even', () => {
  test('returns true for an even number', () => {
    expect(even(4)).toBe(true);
  });
  test('returns false for an odd number', () => {
    expect(even(7)).toBe(false);
  });
});

describe('odd', () => {

});
