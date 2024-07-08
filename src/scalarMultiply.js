export function scalarMultiply(matrix, scalar) {
  return matrix.map((row) => row.map((value) => (value *= scalar)));
}
