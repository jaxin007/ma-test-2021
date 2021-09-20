const { goodsArray } = require('./constants/goods');
const { goodsValidator } = require('./helpers/array/validateArray');
const { printGoods } = require('./helpers/array/printGoods');
const { sortByCost } = require('./helpers/array/sortByCost');
const { sortAlphabetically } = require('./helpers/array/sortAlphabetically');

const validatedArray = goodsValidator(goodsArray);

const goodsToPrint = printGoods(validatedArray);
const sortedByCost = sortByCost([...validatedArray]); // i use spread operator because sort method is mutable
const sortedByAlphabet = sortAlphabetically([...validatedArray]);

console.log(goodsToPrint);
console.log('\n');

console.log('SORTED BY COST:');
console.log(sortedByCost);
console.log('\n');

console.log('SORTED BY ALPHABET:');
console.log(sortedByAlphabet);
