import { inverse } from "../src/inverse.js";

describe("inverse", () => {
  it("should compute the inverse of a 2x2 matrix", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const expected = [
      [-2, 1],
      [1.5, -0.5],
    ];
    const result = inverse(matrix);
    expect(result).toEqual(expected);
  });

  it("should throw an error if the matrix is not invertible", () => {
    const matrix = [
      [1, 2],
      [2, 4],
    ];
    expect(() => inverse(matrix)).toThrow("Matrix is not invertible");
  });
});
