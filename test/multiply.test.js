import Matrix from "../src/matrix.js";
import { multiply } from "../src/multiply.js";

describe("multiply", () => {
  test("multiplies two matrices correctly", () => {
    const matrix1 = new Matrix([
      [1, 2, 3],
      [4, 5, 6],
    ]);

    const matrix2 = new Matrix([
      [7, 8],
      [9, 10],
      [11, 12],
    ]);

    const result = multiply(matrix1, matrix2);
    const expected = new Matrix([
      [58, 64],
      [139, 154],
    ]);

    expect(result.data).toEqual(expected.data);
  });

  test("throws an error if matrices cannot be multiplied", () => {
    const matrix1 = new Matrix([
      [1, 2],
      [3, 4],
    ]);

    const matrix2 = new Matrix([[5, 6, 7]]);

    expect(() => multiply(matrix1, matrix2)).toThrowError();
  });
});
