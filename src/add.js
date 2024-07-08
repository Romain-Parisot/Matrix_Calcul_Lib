/**
 * Adds two matrices element-wise.
 *
 * @param {number[][]} matrix1 - The first matrix.
 * @param {number[][]} matrix2 - The second matrix.
 * @returns {number[][]} The resulting matrix after addition.
 * @throws {Error} If the dimensions of the matrices do not match.
 */

export function add(matrix1, matrix2) {
  if (
    matrix1.length !== matrix2.length ||
    matrix1[0].length !== matrix2[0].length
  ) {
    throw new Error("Matrices dimensions must match");
  }

  let result = matrix1.map((row, i) =>
    row.map((val, j) => val + matrix2[i][j])
  );
  return result;
}
