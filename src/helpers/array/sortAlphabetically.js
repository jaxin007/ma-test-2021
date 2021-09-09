/**
 *
 * @param { { item: String, type: String, weight?: Number, quantity?: Number, pricePerKilo?: String, pricePerItem?: String }[] } goodsArr
 */
const sortAlphabetically = (goodsArr) => goodsArr.sort((a, b) => a.item.localeCompare(b.item));

module.exports = {
  sortAlphabetically,
};
