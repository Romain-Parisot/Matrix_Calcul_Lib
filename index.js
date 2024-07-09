import Matrix from "./src/matrix.js";
import { add } from "./src/add.js";
import { transpose } from "./src/transpose.js";
import { subtract } from "./src/subtract.js";
import { multiply } from "./src/multiply.js";
import { inverse } from "./src/inverse.js";
import { hadamard } from "./src/hadamard.js";
import { diagonal } from "./src/diagonal.js";
import { scalarMultiply } from "./src/scalarMultiply.js";
import { trace } from "./src/trace.js";
import { mean } from "./src/mean.js";

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
let matrix6 = new Matrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
let matrix7 = new Matrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
let matrix8 = new Matrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

// Subtract matrices
let subtractionResult = subtract(matrix4, matrix5);
console.log("Subtraction Result:");
console.log(subtractionResult.data);

// Add matrices
let additionResult = add(matrix1.data, matrix2.data);
console.log("Addition Result:");
console.log(additionResult);

// Multiply matrices (assuming you have a multiply function defined similarly)
try {
  let multiplicationResult = multiply(matrix1, matrix2); // Define this function if needed
  console.log("Multiplication Result:");
  console.log(multiplicationResult.data);
} catch (error) {
  console.error("Error computing multiplication:", error.message);
}

// Transpose matrix
let transposedResult = transpose(matrix3.data);
console.log("Transpose Result:");
console.log(transposedResult);

// Scalar multiplication
let scalar = 2;
let scalarMultiplicationResult = scalarMultiply(matrix1.data, scalar);
console.log("Scalar Multiplication Result:");
console.log(scalarMultiplicationResult);

// Hadamard product
let hadamardResult = hadamard(matrix1.data, matrix2.data);
console.log("Hadamard Result:");
console.log(hadamardResult);

// Diagonal elements
let diagonalElements = diagonal(matrix6.data);
console.log("Diagonal Elements:");
console.log(diagonalElements);

// Inverse matrix
try {
  let inverseResult = inverse(matrix1.data); // assuming matrix1 is invertible
  console.log("Inverse Result:");
  console.log(inverseResult);
} catch (error) {
  console.error("Error computing inverse:", error.message);
}

// Trace of matrix
try {
  const traceResult = trace(matrix7.data);
  console.log("Trace:", traceResult);
} catch (error) {
  console.error("Error computing trace:", error.message);
}

// Mean of matrix elements
let meanValue = mean(matrix8.data);
console.log("Mean Value:");
console.log(meanValue);