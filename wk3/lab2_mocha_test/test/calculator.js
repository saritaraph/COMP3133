const { expect } = require("chai");
const { add, sub, mul, div } = require("../calculator.js");


// custom pass/fail messages
function testWithMessage(title, fn) {
  it(title, function () {
    try {
      fn();
      console.log("PASS:", title);
    } catch (err) {
      console.log("FAIL:", title);
      throw err; 
    }
  });
}

describe("Calculator Tests (Success + Fail for each operation)", function () {
  
  testWithMessage("add(5,2) expected 7", () => {
    expect(add(5, 2)).to.equal(7);
  });

  testWithMessage("add(5,2) expected 8", () => {
    expect(add(5, 2)).to.equal(8);
  });

  testWithMessage("sub(5,2) expected 3", () => {
    expect(sub(5, 2)).to.equal(3);
  });

  testWithMessage("sub(5,2) expected 5", () => {
    expect(sub(5, 2)).to.equal(5);
  });

  testWithMessage("mul(5,2) expected 10", () => {
    expect(mul(5, 2)).to.equal(10);
  });

  testWithMessage("mul(5,2) expected 12", () => {
    expect(mul(5, 2)).to.equal(12);
  });

  // DIV
  testWithMessage("div(10,2) expected 5", () => {
    expect(div(10, 2)).to.equal(5);
  });

  testWithMessage("div(10,2) expected 2", () => {
    expect(div(10, 2)).to.equal(2);
  });
});
