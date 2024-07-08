import Matrix  from './matrix.js';
import { add } from './src/add.js';

let matrix1 = new Matrix([[1, 2], [3, 4]]);
let matrix2 = new Matrix([[5, 6], [7, 8]]);
let result = add(matrix1.data, matrix2.data);
console.log(result);