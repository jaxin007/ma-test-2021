const { removeDollarAndReplaceComma } = require('../string/removeDollarAndDot');

/**
 *
 * @param { { item: String, type: String, weight?: Number, quantity?: Number, pricePerKilo?: String, pricePerItem?: String }[] } goodsArr
 */
const validateAndSortGoods = (goodsArr) => goodsArr.filter((products) => {
  const isItemString = typeof products.item === 'string';
  const isTypeString = typeof products.type === 'string';
  const isWeightNumber = typeof products.weight === 'number';
  const isQuantityNumber = typeof products.quantity === 'number';

  const { pricePerKilo } = products;

  const { pricePerItem } = products;

  return (
    isItemString &&
      isTypeString &&
      (isWeightNumber || isQuantityNumber) &&
      (
        (pricePerKilo && products.pricePerKilo[0] === '$' && !Number.isNaN(removeDollarAndReplaceComma(pricePerKilo)))
        ||
        (pricePerItem && products.pricePerItem[0] === '$' && !Number.isNaN(removeDollarAndReplaceComma(pricePerItem)))
      )
  );
});

module.exports = {
  validateAndSortGoods,
};
