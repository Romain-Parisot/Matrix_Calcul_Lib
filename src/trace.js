/**
 * Computes the trace (sum of diagonal elements) of a square matrix.
 *
 * @param {number[][]} matrix - The square matrix.
 * @returns {number} The trace of the matrix.
 * @throws {Error} If the matrix is not square.
 */
export function trace(matrix) {
  if (!isSquare(matrix)) {
    throw new Error("Matrix must be square to compute trace.");
  }

  let traceSum = 0;
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    traceSum += matrix[i][i];
  }

  return traceSum;
}

/**
 * Checks if a matrix is square.
 *
 * @param {number[][]} matrix - The matrix to check.
 * @returns {boolean} True if the matrix is square, false otherwise.
 */
function isSquare(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  return numRows === numCols;
}
