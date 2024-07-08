import { trace } from "../src/trace";

describe("trace", () => {
  test("should compute the trace of a square matrix", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const expectedTrace = 1 + 5 + 9; // 15

    const result = trace(matrix);
    expect(result).toEqual(expectedTrace);
  });

  test("should throw an error for non-square matrices", () => {
    const matrix = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];

    expect(() => {
      trace(matrix);
    }).toThrow("Matrix must be square to compute trace.");
  });
});
