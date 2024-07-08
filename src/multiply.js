import Matrix from "./Matrix.js";

export function multiply(matrix1, matrix2) {
  let result = matrix1.data.map((row, i) =>
    Array(matrix2.data[0].length)
      .fill(0)
      .map((_, j) =>
        row.reduce((sum, val, k) => sum + val * matrix2.data[k][j], 0)
      )
  );
  return new Matrix(result);
}
