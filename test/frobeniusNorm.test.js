import { frobeniusNorm } from "../src/frobeniusNorm.js";

describe("frobeniusNorm", () => {
  test("calculates the Frobenius norm correctly for a matrix", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];

    const result = frobeniusNorm(matrix);
    const expected = Math.sqrt(1 * 1 + 2 * 2 + 3 * 3 + 4 * 4 + 5 * 5 + 6 * 6);

    expect(result).toBe(expected);
  });

  test("returns 0 for an empty matrix", () => {
    const matrix = [];

    const result = frobeniusNorm(matrix);

    expect(result).toBe(0);
  });

  test("calculates the Frobenius norm correctly for a larger matrix", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const result = frobeniusNorm(matrix);
    const expected = Math.sqrt(
      1 * 1 + 2 * 2 + 3 * 3 + 4 * 4 + 5 * 5 + 6 * 6 + 7 * 7 + 8 * 8 + 9 * 9
    );

    expect(result).toBe(expected);
  });

  test("throws an error if the matrix is not provided", () => {
    expect(() => frobeniusNorm()).toThrowError();
  });

  test("throws an error if the matrix is not a valid 2D array", () => {
    const matrix = [[1, 2, 3], 4, [5, 6]];

    expect(() => frobeniusNorm(matrix)).toThrowError();
  });
});
