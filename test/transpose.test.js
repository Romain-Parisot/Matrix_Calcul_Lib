import { transpose } from "../src/transpose.js";
import Matrix from "../src/matrix.js";

describe("transpose", () => {
  it("should transpose a 2x3 matrix", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const expected = [
      [1, 4],
      [2, 5],
      [3, 6],
    ];
    const result = transpose(matrix);
    expect(result).toEqual(expected);
  });

  it("should transpose a 3x3 matrix", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ];
    const result = transpose(matrix);
    expect(result).toEqual(expected);
  });

  it("should transpose a 1x3 matrix", () => {
    const matrix = [[1, 2, 3]];
    const expected = [[1], [2], [3]];
    const result = transpose(matrix);
    expect(result).toEqual(expected);
  });

  it("should transpose a 3x1 matrix", () => {
    const matrix = [[1], [2], [3]];
    const expected = [[1, 2, 3]];
    const result = transpose(matrix);
    expect(result).toEqual(expected);
  });
});
