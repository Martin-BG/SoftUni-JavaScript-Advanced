function isSymmetric(arr) {
  if (!Array.isArray(arr)) {
    return false; // Non-arrays are non-symmetric
  }
  const reversed = arr.slice(0).reverse(); // Clone + reverse
  return (JSON.stringify(arr) === JSON.stringify(reversed));
}

module.exports = {isSymmetric};
