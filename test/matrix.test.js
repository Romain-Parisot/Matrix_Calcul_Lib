import Matrix from "../src/matrix.js";

describe("Matrix", () => {
  describe("zeros", () => {
    it("should create a matrix of zeros with given dimensions", () => {
      const rows = 2;
      const cols = 3;
      const result = Matrix.zeros(rows, cols);
      expect(result).toEqual([
        [0, 0, 0],
        [0, 0, 0],
      ]);
    });
  });

  describe("identity", () => {
    it("should create an identity matrix of given size", () => {
      const size = 3;
      const result = Matrix.identity(size);
      expect(result).toEqual([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]);
    });
  });
});
