import { hadamard } from "../src/hadamard.js";

describe("hadamard", () => {
  it("should compute the Hadamard product of two matrices", () => {
    const matrix1 = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const matrix2 = [
      [7, 8, 9],
      [10, 11, 12],
    ];
    const expected = [
      [7, 16, 27],
      [40, 55, 72],
    ];
    const result = hadamard(matrix1, matrix2);
    expect(result).toEqual(expected);
  });
});
