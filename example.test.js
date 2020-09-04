/ IMPORT MODULES under test here:
import { addTwoNumbers, multiplyTwoNumbers, subtractTwoNumbers, divideTwoNumbers } from '../mathUtils.js';

const test = QUnit.test;

test('addTwoNumbers should return 12 if passed 7 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 12;
    const firstNumber = 7;
    const secondNumber = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addTwoNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multiplyTwoNumbers should return 15 if passed 5 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 15;
    const firstNumber = 5;
    const secondNumber = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiplyTwoNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('subtractTwoNumbers should return 5 if passed 10 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    const firstNumber = 10;
    const secondNumber = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subractTwoNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('divideTwoNumbers should return 3 if passed 6 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 3;
    const firstNumber = 6;
    const secondNumber = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divideTwoNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
