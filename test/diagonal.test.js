import { diagonal } from "../src/diagonal";

describe("diagonal", () => {
  it("should extract the diagonal elements of a square matrix", () => {
    let matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    let result = diagonal(matrix);
    expect(result).toEqual([1, 5, 9]);
  });

  it("should return an empty array for an empty matrix", () => {
    let matrix = [];
    let result = diagonal(matrix);
    expect(result).toEqual([]);
  });

  it("should throw an error if the matrix is not square", () => {
    let matrix = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    expect(() => diagonal(matrix)).toThrowError("Matrix must be square");
  });
});