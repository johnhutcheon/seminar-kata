const { getSubSquare } = require("../kata");

describe("getSubSquare", () => {
  test("returns an error when passed no matrix", () => {
    const testFunc = getSubSquare();
    expect(testFunc).toEqual("Please provide a matrix");
  });
  test("should return an error when passed no X co-ordinate", () => {
    const testMatrix = [
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

    const testFunc = getSubSquare(testMatrix);
    expect(testFunc).toEqual("Please provide an xStartIndex");
  });
  test("should return an error when passed no Y co-ordinate", () => {
    const testMatrix = [
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
    const testX = 3;

    const testFunc = getSubSquare(testMatrix, testX);
    expect(testFunc).toEqual("Please provide a yStartIndex");
  });
  test("should return an error when passed an X or Y co-ordinate that exceeds the matrix size", () => {
    const testMatrix = [
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
    const testX = 10;
    const testY = 10;
    const testFunc = getSubSquare(testMatrix, testX, testY);
    expect(testFunc).toEqual("Subsquare exceeds the bounds of the matrix");
  });
  test("returns an error when passed an empty array", () => {
    const testMatrix = [];
    const testX = 10;
    const testY = 10;
    const testFunc = getSubSquare(testMatrix, testX, testY);
    expect(testFunc).toEqual("Please provide a matrix");
  });
  test("when passed a matrix where X co-ordinates are less than 3, returns an error", () => {
    const testMatrix = [
      [5, 3],
      [6, 7],
      [1, 9],
      [8, 5],
      [4, 2],
      [7, 1],
      [9, 6],
      [2, 8],
      [3, 4],
    ];
    const testX = 4;
    const testY = 4;
    const testFunc = getSubSquare(testMatrix, testX, testY);
    expect(testFunc).toEqual("Subsquare exceeds the bounds of the matrix");
  });
  test("when passed a matrix where Y co-ordinates are less than 3, returns an error", () => {
    const testMatrix = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
    ];
    const testX = 4;
    const testY = 4;
    const testFunc = getSubSquare(testMatrix, testX, testY);
    expect(testFunc).toEqual("Subsquare exceeds the bounds of the matrix");
  });
  test("returns the correct answer when passed a 3x3 matrix and X & Y at position 0", () => {
    const testMatrix = [
      [5, 3, 4],
      [6, 7, 2],
      [1, 9, 8],
    ];

    const testX = 0;
    const testY = 0;
    const testFunc = getSubSquare(testMatrix, testX, testY);
    expect(testFunc).toEqual([
      [5, 3, 4],
      [6, 7, 2],
      [1, 9, 8],
    ]);
  });
  test("should return correct answer when passed full matrix with X & Y at position 0", () => {
    const testMatrix = [
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
    const testX = 0;
    const testY = 0;
    const testFunc = getSubSquare(testMatrix, testX, testY);
    expect(testFunc).toEqual([
      [5, 3, 4],
      [6, 7, 2],
      [1, 9, 8],
    ]);
  });
  test("should return correct answer when passed full matrix with X & Y in valid positions", () => {
    const testMatrix = [
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
    const testX = 5;
    const testY = 5;
    const testFunc = getSubSquare(testMatrix, testX, testY);
    expect(testFunc).toEqual([
      [4, 8, 5],
      [7, 2, 8],
      [9, 6, 3],
    ]);
  });
  test("should return error when passed full matrix but X & Y result in a 3x3 square that exceeds the matrix (Y co-ord out of bounds)", () => {
    const testMatrix = [
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
    const testX = 5;
    const testY = 7;
    const testFunc = getSubSquare(testMatrix, testX, testY);
    expect(testFunc).toEqual("Subsquare exceeds the bounds of the matrix");
  });
  test("should return error when passed full matrix but X & Y result in a 3x3 square that exceeds the matrix (X co-ord out of bounds)", () => {
    const testMatrix = [
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
    const testX = 7;
    const testY = 5;
    const testFunc = getSubSquare(testMatrix, testX, testY);
    expect(testFunc).toEqual("Subsquare exceeds the bounds of the matrix");
  });
});
