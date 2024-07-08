import { add } from "../src/add";
import Matrix from "../src/matrix";

describe("add", () => {
    it("should add two matrices", () => {
        let matrix1 = new Matrix([[1, 2], [3, 4]]);
        let matrix2 = new Matrix([[5, 6], [7, 8]]);
        let result = add(matrix1.data, matrix2.data);
        expect(result).toEqual([[6, 8], [10, 12]]);
    });
});