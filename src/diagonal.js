/**
 * Extracts the diagonal elements of a square matrix.
 *
 * @param {number[][]} matrix - The square matrix.
 * @returns {number[]} The diagonal elements of the matrix.
 * @throws {Error} If the matrix is not square.
 */
export function diagonal(matrix) {
  /**
   * Checks if a matrix is square (has the same number of rows and columns).
   *
   * @param {number[][]} matrix - The matrix to check.
   * @returns {boolean} True if the matrix is square, false otherwise.
   */
  function isSquare(matrix) {
    const rows = matrix.length;
    const cols = matrix[0] ? matrix[0].length : 0;
    return rows === cols;
  }

  if (!isSquare(matrix)) {
    throw new Error("Matrix must be square");
  }

  return matrix.map((row, index) => row[index]);
}