/**
 * Calculates the mean (average) of all elements in a matrix.
 *
 * @param {number[][]} matrix - The matrix to calculate the mean of.
 * @returns {number} The mean of all elements in the matrix.
 */
export function mean(matrix) {
  const totalElements = matrix.length * matrix[0].length;
  let sum = 0;

  matrix.forEach(row => {
    row.forEach(value => {
      sum += value;
    });
  });

  return sum / totalElements;
}
