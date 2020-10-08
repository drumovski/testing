const { exportAllDeclaration } = require('@babel/types');
const { TestResult } = require('@jest/types');
let { repeatMessage } = require('../source/index');

test("Name for and example test", () => {
    expect("this is a truthy string").toBeTruthy();
})

test("RepeatMessage is a function.", () => {
    expect(typeof(repeatMessage)).toBe("function");
});

test("RepeatMessage is a block of multiple tests.", () => {
    expect(repeatMessage("hello", 3)).toBe("hellohellohello");
    expect(repeatMessage("hello", 0)).toBe("");
    expect(repeatMessage("a", 5)).toBe("aaaaa");
    // expect(repeatMessage()).toHaveBeenCalledTimes(1); // req mock or spy function
});