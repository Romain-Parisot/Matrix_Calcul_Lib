/**
 * Computes the Frobenius norm of a matrix.
 *
 * @param {number[][]} matrix - The matrix to calculate the Frobenius norm of.
 * @returns {number} The Frobenius norm of the matrix.
 */
export function frobeniusNorm(matrix) {
  let norm = 0;

  matrix.forEach((row) => {
    row.forEach((value) => {
      norm += value * value;
    });
  });

  return Math.sqrt(norm);
}
