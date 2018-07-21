/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} result
 */
function sum(a, b) {

  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('必须传入数字')
  }

  return a + b;
}

module.exports = sum;