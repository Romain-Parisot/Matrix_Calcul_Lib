import Matrix from "./src/matrix.js";
import { add } from "./src/add.js";
import { transpose } from "./src/transpose.js";
import { multiply } from "./src/multiply.js";
import { inverse } from "./src/inverse.js";

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
console.log("Addition Result:");
console.log(result);

let multiply_result = multiply(matrix1, matrix2);
console.log("Multiplication Result:");
console.log(multiply_result.data);

let transposed_result = transpose(matrix3.data);
console.log("Transpose Result:");
console.log(transposed_result);

try {
  let inverse_result = inverse([
    [1, 2],
    [3, 4],
  ]);
  console.log("Inverse Result:");
  console.log(inverse_result);
} catch (error) {
  console.error("Error computing inverse:", error.message);
}
