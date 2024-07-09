# Matrix Calculation Library

Matrix Calculation Library is an open-source student project aimed at creating a matrix calculation library and publishing it on NPM. This library provides various matrix operations commonly used in mathematics, data science, and machine learning.

## Project Purpose

The primary goal of this project is to offer a simple and efficient library for performing matrix operations. The features include, but are not limited to:

- Addition and subtraction of matrices
- Scalar and matrix multiplication
- Hadamard product
- Matrix transposition
- Diagonal extraction
- Trace calculation
- Mean calculation of matrix elements
- Matrix inversion

## Installation

To install the library, use the following command:

```bash
npm install matrix_calcul_lib
```

## Usage

Once installed, you can use the library in your project. Here is an example of how to use it:

```js
import Matrix from "./src/matrix.js";
import { add } from "./src/add.js";

let matrix1 = new Matrix([
  [1, 2],
  [3, 4],
]);

let matrix2 = new Matrix([
  [5, 6],
  [7, 8],
]);

let additionResult = add(matrix1.data, matrix2.data);
console.log("Addition Result:");
console.log(additionResult);
```

## Development

To clone and set up the project locally:

```bash
git clone https://github.com/your-username/matrix_calcul_lib.git
cd matrix_calcul_lib
npm install
```

## Running Tests

To run unit tests:

```bash
npm test
```

## Compile and Run

To compile and execute the index.js file:

```bash
node index.js
```
## Contributing

Contributions are welcome! If you wish to contribute, please create an issue to discuss what you would like to add or modify. Pull requests are also welcome.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add some awesome feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. For more information, see the [LICENSE](./LICENSE) file.

---

We hope you find this library useful and look forward to your feedback and contributions!

