const { goodsArray } = require('./constants/goods');
const { goodsValidator } = require('./helpers/array/validateArray');
const { printGoods } = require('./helpers/array/printGoods');
const { sortByCost } = require('./helpers/array/sortByCost');
const { sortAlphabetically } = require('./helpers/array/sortAlphabetically');

const validatedArray = goodsValidator(goodsArray);

const goodsToPrint = printGoods(validatedArray);

console.log(goodsToPrint);
console.log('\n');

const sortedByCost = sortByCost(validatedArray);

console.log('SORTED BY COST:');
console.log(sortedByCost);
console.log('\n');

const sortedByAlphabet = sortAlphabetically(validatedArray);

console.log('SORTED BY ALPHABET:');
console.log(sortedByAlphabet);
