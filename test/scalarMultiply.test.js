import { scalarMultiply } from "../src/scalarMultiply.js";

describe("scalarMultiply", () => {
  test("multiplies a matrix by a scalar correctly", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const scalar = 2;
    const result = scalarMultiply(matrix, scalar);
    const expected = [
      [2, 4, 6],
      [8, 10, 12],
    ];
    expect(result).toEqual(expected);
  });

  test("returns an empty matrix when given an empty matrix", () => {
    const matrix = [];
    const scalar = 5;
    const result = scalarMultiply(matrix, scalar);
    const expected = [];
    expect(result).toEqual(expected);
  });

  test("handles negative scalar values correctly", () => {
    const matrix = [
      [1, -2, 3],
      [-4, 5, -6],
    ];
    const scalar = -3;
    const result = scalarMultiply(matrix, scalar);
    const expected = [
      [-3, 6, -9],
      [12, -15, 18],
    ];
    expect(result).toEqual(expected);
  });

  test("handles scalar value of zero correctly", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const scalar = 0;
    const result = scalarMultiply(matrix, scalar);
    const expected = [
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(result).toEqual(expected);
  });

  test("does not modify the original matrix", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const scalar = 2;
    const originalMatrix = JSON.parse(JSON.stringify(matrix)); // deep copy of the original matrix
    scalarMultiply(matrix, scalar);
    expect(matrix).toEqual(originalMatrix);
  });
});
