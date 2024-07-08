import Matrix from "./src/matrix.js";
import { add } from "./src/add.js";
import { transpose } from "./src/transpose.js";

let matrix1 = new Matrix([
  [1, 2],
  [3, 4],
]);
let matrix2 = new Matrix([
  [5, 6],
  [7, 8],
]);
let matrix3 = new Matrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

let result = add(matrix1.data, matrix2.data);
console.log(result);

let multiply_result = multiply(matrix1, matrix2);
console.log(multiply_result.data);

let transposed_result = transpose(matrix3.data);
console.log(transposed_result);
