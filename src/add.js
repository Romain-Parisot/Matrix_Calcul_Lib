export function add(matrix1, matrix2) {
    let result = matrix1.map((row, i) =>
      row.map((val, j) => val + matrix2[i][j])
    );
    return result;
}
  
  