const { removeDollarAndReplaceComma } = require('../string/removeDollarAndDot');

/**
 *
 * @param { { item: String, type: String, weight?: Number, quantity?: Number, pricePerKilo?: String, pricePerItem?: String }[] } goodsArr
 */
const goodsValidator = (goodsArr) => goodsArr.filter(({ item, type, weight, quantity, pricePerKilo, pricePerItem }) => {
  const isItemString = typeof item === 'string';
  const isTypeString = typeof type === 'string';
  const isWeightNumber = typeof weight === 'number';
  const isQuantityNumber = typeof quantity === 'number';

  return (
    isItemString &&
      isTypeString &&
      (isWeightNumber || isQuantityNumber) &&
      (
        (pricePerKilo && pricePerKilo[0] === '$' && !Number.isNaN(removeDollarAndReplaceComma(pricePerKilo)))
        ||
        (pricePerItem && pricePerItem[0] === '$' && !Number.isNaN(removeDollarAndReplaceComma(pricePerItem)))
      )
  );
});

module.exports = {
  goodsValidator,
};
