/**
 * Computes the inverse of a 2x2 matrix.
 *
 * @param {number[][]} matrix - The 2x2 matrix to be inverted.
 * @returns {number[][]} The inverted matrix.
 * @throws {Error} If the matrix is not invertible.
 */
export function inverse(matrix) {
  const [[a, b], [c, d]] = matrix;
  const determinant = a * d - b * c;
  if (determinant === 0) throw new Error("Matrix is not invertible");

  return [
    [d / determinant, -b / determinant],
    [-c / determinant, a / determinant],
  ];
}
