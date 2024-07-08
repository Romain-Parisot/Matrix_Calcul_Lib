import Matrix from "./src/matrix.js";
import { add } from "./src/add.js";
import { transpose } from "./src/transpose.js";
import { subtract } from "./src/subtract.js";

let matrix1 = new Matrix([
  [1, 2],
  [3, 4],
]);
let matrix2 = new Matrix([
  [5, 6],
  [7, 8],
]);
let result = add(matrix1.data, matrix2.data);
console.log(result);

let matrix3 = new Matrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
let transposed = transpose(matrix3.data);
console.log(transposed);

let matrix4 = new Matrix([
    [10, 11],
    [12, 13],
  ]);
  let matrix5 = new Matrix([
    [1, 2],
    [3, 4],
  ]);
  let subtractionResult = subtract(matrix4, matrix5);
  console.log("Subtraction Result:");
  console.log(subtractionResult.data);