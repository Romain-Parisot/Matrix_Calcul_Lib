import { mean } from "../src/mean";
import Matrix from "../src/matrix";

describe("mean", () => {
  it("should calculate the mean of all elements in the matrix", () => {
    let matrix = new Matrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    let result = mean(matrix.data);
    expect(result).toBe(5);
  });

  it("should handle a matrix with one element", () => {
    let matrix = new Matrix([
      [42]
    ]);
    let result = mean(matrix.data);
    expect(result).toBe(42);
  });

  it("should handle an empty matrix", () => {
    let matrix = new Matrix([[]]);
    let result = mean(matrix.data);
    expect(result).toBeNaN(); // Mean of empty matrix is not a number
  });
});
