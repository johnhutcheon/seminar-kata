const matrix = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 4, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

const x = 1;
const y = 6;

function getSubSquare(matrix, x, y) {
  if (!matrix || matrix.length === 0) return "Please provide a matrix";
  if (x === undefined) return "Please provide an xStartIndex";
  if (y === undefined) return "Please provide a yStartIndex";
  if (x > matrix[0].length - 1 || y > matrix.length - 1)
    return "Subsquare exceeds the bounds of the matrix";

  const newArr = [...matrix];
  const slicedY = newArr.slice(y);

  const slicedX = slicedY.map((element) => {
    return element.slice(x);
  });

  const arrayOfThree = slicedX.slice(0, 3);

  const answer = arrayOfThree.map((element) => {
    return element.slice(0, 3);
  });

  if (answer.length < 3 || answer[0].length < 3) {
    return "Subsquare exceeds the bounds of the matrix";
  } else return answer;
}

console.log(getSubSquare(matrix, x, y));

module.exports = { getSubSquare };
