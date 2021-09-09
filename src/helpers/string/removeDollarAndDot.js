/**
 *
 * @param {string} str
 */
const removeDollarAndReplaceComma = (str) => str.slice(1).replace(/,/, '.');

module.exports = {
  removeDollarAndReplaceComma,
};
