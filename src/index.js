
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    let arr = matrix;
    if (arr.toString().length !== 0) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          let jReverse = i % 2 === 0 
            ? j
            : (matrix[i].length - 1 - j);
    
          result.push( matrix[i][jReverse] );
        }
      }
  return result;
}
  return [];
}
