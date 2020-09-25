
// import functions and grab DOM elements
import { handleSumClick, handleMultiplyClick, handleSubtractClick, handleDivideClick } from './handlers.js';
import { addTwoNumbers } from './mathUtils.js';
import { multiplyTwoNumbers } from './mathUtils.js';
import { subtractTwoNumbers } from './mathUtils.js';
import { divideTwoNumbers } from './mathUtils.js';

const sumButton = document.getElementById('sum-button');
const multiplyButton = document.getElementById('multiply-button');
const subtractButton = document.getElementById('subtract-button');
const divideButton = document.getElementById('divide-button');

dropButton.addEventListener('click', handleDivideClick)
sumButton.addEventListener('click', handleSumClick);
multiplyButton.addEventListener('click', handleMultiplyClick);
subtractButton.addEventListener('click', handleSubtractClick);
divideButton.addEventListener('click', handleDivideClick);


