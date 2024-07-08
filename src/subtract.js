/**
 * Subtracts the second matrix from the first matrix element-wise.
 *
 * @param {Matrix} matrix1 - The first matrix.
 * @param {Matrix} matrix2 - The second matrix.
 * @returns {Matrix} The resulting matrix after subtraction.
 * @throws {Error} If the dimensions of the matrices do not match.
 */
export function subtract(matrix1, matrix2) {
  if (
    matrix1.data.length !== matrix2.data.length ||
    matrix1.data[0].length !== matrix2.data[0].length
  ) {
    throw new Error("Matrices dimensions must match");
  }

  let result = matrix1.data.map((row, i) =>
    row.map((val, j) => val - matrix2.data[i][j])
  );

  return { data: result };
}
