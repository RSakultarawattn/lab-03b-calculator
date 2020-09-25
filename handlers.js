// import functions and grab DOM elements
import { addTwoNumbers, multiplyTwoNumbers, subtractTwoNumbers, divideTwoNumbers } from './mathUtils.js';

const sumInput1 = document.getElementById('sum-input-1');
const sumInput2 = document.getElementById('sum-input-2');
const sumSpan = document.getElementById('sum-span');
const sumButton =document.getElementById('sum-button');

// define "what happens" on click
// no parameters? Therefore it cannot be a PURE function.
// IMPURE FUNCTIONS are suuuuper hard to test
export function handleSumClick() {
    // - Get the values of the two inputs
    const value1 = sumInput1.valueAsNumber;
    const value2 = sumInput2.valueAsNumber;

    // - Add together the VALUE of the two inputs
    // function call
    // we have the blueprint, so this is the building:
    // we pass in the ingredients, and the function 'runs', as defined in the declaration
    const sum = addTwoNumbers(value1, value2);

    // - Inject the sum into our sum `span`
    sumSpan.textContent = sum;
}

const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const productSpan = document.getElementById('multiply-span');
const multiplyButton = document.getElementById('multiply-button');

export function handleMultiplyClick() {
    const value1 = multiplyInput1.valueAsNumber;
    const value2 = multiplyInput2.valueAsNumber;
    const product = multiplyTwoNumbers(value1, value2);

    productSpan.textContent = product;
}
const subtractInput1 = document.getElementById('subtract-input-1');
const subtractInput2 = document.getElementById('subtract-input-2');
const subtractSpan = document.getElementById('subtract-span');
const subtractButton = document.getElementById('subtract-button');

export function handleSubtractClick() {
    const value1 = subtractInput1.valueAsNumber;
    const value2 = subtractInput2.valueAsNumber;
    const difference = subtractTwoNumbers(value1, value2);

    subtractSpan.textContent = difference;
}
const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideSpan = document.getElementById('divide-span');
const divideButton = document.getElementById('divide-button');

export function handleDivideClick() {
    const value1 = divideInput1.valueAsNumber;
    const value2 = divideInput2.valueAsNumber;
    const quotient = divideTwoNumbers(value1, value2);

    divideSpan.textContent = quotient;
}

  