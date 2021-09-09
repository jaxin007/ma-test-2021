const { goodsArray } = require('../../constants/goods');
const { removeDollarAndReplaceComma } = require('../string/removeDollarAndDot');

/**
 *
 * @param { { item: String, type: String, weight?: Number, quantity?: Number, pricePerKilo?: String, pricePerItem?: String }[] } goodsArr
 */
const sortByCost = (goodsArr) => {
  goodsArr.sort((a, b) => {
    const firstCost = removeDollarAndReplaceComma(a.pricePerKilo) || removeDollarAndReplaceComma(a.pricePerItem);
    const secondCost = removeDollarAndReplaceComma(b.pricePerKilo) || removeDollarAndReplaceComma(b.pricePerItem);

    return firstCost - secondCost;
  });
};

sortByCost(goodsArray);
