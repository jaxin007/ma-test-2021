/**
 *
 * @param { string } str
 * @return { string }
 */
const removeDollarAndReplaceComma = (str) => str.slice(1).replace(/,/, '.');

module.exports = {
  removeDollarAndReplaceComma,
};
