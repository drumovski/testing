const { describe } = require('yargs');
// Function called "calculateSum"
let { calculateSum } = require('../source/index');

describe("calculateSum input functionality", () => {
    test("Name for and example test", () => {
        expect(() => {
            calculateSum([1,2,3,4])
        }).not.toThrow();
        expect(() => {
            calculateSum(["hello", "world"])
        }).toThrow();
        expect(calculateSum([1,2,3,4,5])).toBe(15);
    })
})

