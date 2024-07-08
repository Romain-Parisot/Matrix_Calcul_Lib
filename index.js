import Matrix from "./src/matrix.js";
import { add } from "./src/add.js";
import { transpose } from "./src/transpose.js";
import { subtract } from "./src/subtract.js";
import { multiply } from "./src/multiply.js";
import { inverse } from "./src/inverse.js";
import { hadamard } from "./src/hadamard.js";
import { diagonal } from "./src/diagonal.js";
import { scalarMultiply } from "./src/scalarMultiply.js";

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

let additionResult = add(matrix1.data, matrix2.data);
console.log("Addition Result:");
console.log(additionResult);

let multiplicationResult = multiply(matrix1, matrix2);
console.log("Multiplication Result:");
console.log(multiplicationResult.data);

let transposedResult = transpose(matrix3.data);
console.log("Transpose Result:");
console.log(transposed_result);

let scalar = 2;
let scalarMultiplicationResult = scalarMultiply(matrix1.data, scalar);
console.log("Scalar Multiplication Result:");
console.log(scalarMultiplicationResult);
console.log(transposedResult);

let hadamardResult = hadamard(matrix1.data, matrix2.data);
console.log("Hadamard Result:");
console.log(hadamardResult);

try {
  let inverseResult = inverse([
    [1, 2],
    [3, 4],
  ]);
  console.log("Inverse Result:");
  console.log(inverseResult);
} catch (error) {
  console.error("Error computing inverse:", error.message);
}

let matrix6 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let diagonalElements = diagonal(matrix6);
console.log("Diagonal Elements:");
console.log(diagonalElements);
