/**

Multiplies a matrix by a scalar.*
@param {number[][]} matrix - The matrix to be multiplied.
@param {number} scalar - The scalar value.
@returns {number[][]} The resulting matrix after multiplication.
*/
export function scalarMultiply(matrix, scalar) {
  return matrix.map((row) => row.map((value) => (value *= scalar)));
}
