/**
 * Multiplies each element of a matrix by a scalar value.
 *
 * @param {number[][]} matrix - The matrix to be multiplied.
 * @param {number} scalar - The scalar value to multiply by.
 * @returns {number[][]} The resulting matrix after scalar multiplication.
 */
export function scalarMultiply(matrix, scalar) {
  return matrix.map((row) => row.map((value) => value * scalar));
}
