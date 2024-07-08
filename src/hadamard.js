/**
 * Computes the Hadamard product (element-wise multiplication) of two matrices.
 *
 * @param {number[][]} matrix1 - The first matrix.
 * @param {number[][]} matrix2 - The second matrix.
 * @returns {number[][]} The resulting matrix after element-wise multiplication.
 */
export function hadamard(matrix1, matrix2) {
  return matrix1.map((row, i) => row.map((val, j) => val * matrix2[i][j]));
}
