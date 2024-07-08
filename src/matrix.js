/**
 * Class representing a Matrix.
 */
class Matrix {
  /**
   * Create a matrix.
   * @param {number[][]} data - The data for the matrix.
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Create a matrix of zeros with given dimensions.
   * @param {number} rows - The number of rows.
   * @param {number} cols - The number of columns.
   * @returns {number[][]} A matrix of zeros.
   */
  static zeros(rows, cols) {
    return Array.from({ length: rows }, () => Array(cols).fill(0));
  }

  /**
   * Create an identity matrix of given size.
   * @param {number} size - The size of the identity matrix.
   * @returns {number[][]} An identity matrix.
   */
  static identity(size) {
    let data = Array.from({ length: size }, () => Array(size).fill(0));
    for (let i = 0; i < size; i++) {
      data[i][i] = 1;
    }
    return data;
  }
}

export default Matrix;
