class Matrix {
    constructor(data) {
      this.data = data;
    }
  
    static zeros(rows, cols) {
      return Array.from({ length: rows }, () => Array(cols).fill(0));
    }
  
    static identity(size) {
      let data = Array.from({ length: size }, () => Array(size).fill(0));
      for (let i = 0; i < size; i++) {
        data[i][i] = 1;
      }
      return data;
    }
}
  
export default Matrix;
  