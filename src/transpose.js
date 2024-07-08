/**
 * Transpose a matrix.
 *
 * @param {number[][]} matrix - The matrix to transpose.
 * @returns {number[][]} The transposed matrix.
 */
export function transpose(matrix) {
  let result = matrix[0].map((_, colIndex) =>
    matrix.map((row) => row[colIndex])
  );
  return result;
}
