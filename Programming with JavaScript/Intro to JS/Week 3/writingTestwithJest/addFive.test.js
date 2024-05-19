const addFive = require('./addFive');

test('returns the number plus 5',() => {
    expect(addFive(5)).toBe(10);
}) 

test('returns the number plus 5',() => {
    expect(addFive(100)).toBe(105);
})