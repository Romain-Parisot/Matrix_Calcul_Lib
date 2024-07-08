/**
 * Multiplies two matrices.
 *
 * @param {Matrix} matrix1 - The first matrix to multiply.
 * @param {Matrix} matrix2 - The second matrix to multiply.
 * @returns {Matrix} The resulting matrix after multiplication.
 *
 * @throws {Error} If the number of columns in the first matrix does not equal the number of rows in the second matrix.
 */
export function multiply(matrix1, matrix2) {
  let result = matrix1.data.map((row, i) =>
    Array(matrix2.data[0].length)
      .fill(0)
      .map((_, j) =>
        row.reduce((sum, val, k) => sum + val * matrix2.data[k][j], 0)
      )
  );
  return { data: result };
}
