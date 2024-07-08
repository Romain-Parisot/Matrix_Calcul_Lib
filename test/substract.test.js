import { subtract } from "../src/subtract";
import Matrix from "../src/matrix";

describe("subtract", () => {
  it("should subtract the second matrix from the first matrix", () => {
    let matrix1 = new Matrix([
      [5, 6],
      [7, 8],
    ]);
    let matrix2 = new Matrix([
      [1, 2],
      [3, 4],
    ]);
    let result = subtract(matrix1, matrix2);
    expect(result.data).toEqual([
      [4, 4],
      [4, 4],
    ]);
  });

  it("should throw an error if the dimensions of the matrices do not match", () => {
    let matrix1 = new Matrix([
      [1, 2],
    ]);
    let matrix2 = new Matrix([
      [1, 2],
      [3, 4],
    ]);
    expect(() => subtract(matrix1, matrix2)).toThrowError("Matrices dimensions must match");
  });
});