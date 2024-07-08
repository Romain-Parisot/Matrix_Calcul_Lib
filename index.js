import Matrix from "./matrix.js";
import { add } from "./src/add.js";
import { multiply } from "./src/multiply.js";

let matrix1 = new Matrix([
  [1, 2],
  [3, 4],
]);
let matrix2 = new Matrix([
  [5, 6],
  [7, 8],
]);
let result = add(matrix1.data, matrix2.data);

let multiply_result = multiply(matrix1, matrix2);
console.log(multiply_result.data);
console.log(result);
