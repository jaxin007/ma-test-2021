const { removeDollarAndReplaceComma } = require('../string/removeDollarAndDot');
const { goodsArray } = require('../../constants/goods');

/**
 *
 * @param { { item: String, type: String, weight?: Number, quantity?: Number, pricePerKilo?: String, pricePerItem?: String }[] } goodsArr
 */
const printGoods = (goodsArr) => goodsArr.reduce((acc, { item, pricePerItem, pricePerKilo, type, quantity, weight }) => {
  const cost = pricePerKilo ? +removeDollarAndReplaceComma(pricePerKilo) : +removeDollarAndReplaceComma(pricePerItem);

  switch (item) {
    case 'apple':
      acc.costApples += cost;

      acc.applesWeight += weight || 0;

      break;

    case 'orange':
      if (!acc.cheapestOrange.type || cost < acc.cheapestOrange.cost) {
        acc.cheapestOrange.type = type;

        acc.cheapestOrange.cost = cost;
      }

      acc.costOranges += cost;

      break;

    case 'pineapple':
      acc.costPineapples += cost;

      break;

    case 'watermelon':
      acc.watermelonQuantity += quantity || 0;

      acc.costWatermelons += cost;

      break;

    default:
      break;
  }

  return acc;
}, {
  watermelonQuantity: 0,
  applesWeight: 0,
  cheapestOrange: {
    type: '',
    cost: 0,
  },
  costApples: 0,
  costPineapples: 0,
  costWatermelons: 0,
  costOranges: 0,
});

console.log(printGoods(goodsArray));
