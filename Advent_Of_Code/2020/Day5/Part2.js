let finalSeat = [];

const part2 = (input) => {
  input.split("\n").map((ele) => {
    let lowerRow = 0;
    let upperRow = 127;
    let lowerCol = 0;
    let upperCol = 7;

    let finalRow = 0;
    let finalCol = 0;

    ele.split("").map((move) => {
      let letfRows = upperRow - lowerRow;
      let leftCols = upperCol - lowerCol;

      let halfRow = letfRows / 2;
      let halfCol = leftCols / 2;

      switch (move) {
        case "F":
          if (letfRows == 1) finalRow = lowerRow;

          upperRow = Math.floor(upperRow - halfRow);
          break;
        case "B":
          if (letfRows == 1) finalRow = upperRow;

          lowerRow = Math.ceil(upperRow - halfRow);

          break;
        case "L":
          if (leftCols == 1) finalCol = lowerCol;

          upperCol = Math.floor(upperCol - halfCol);
          break;
        case "R":
          if (leftCols == 1) finalCol = upperCol;

          lowerCol = Math.ceil(upperCol - halfCol);
          break;
      }
      finalSeat.push([finalRow, finalCol]);
    });
  });

  let ids = finalSeat.map((ele) => {
    return ele[0] * 8 + ele[1];
  });

  let sortedList = ids.sort((a, b) => a - b);

  for (let i = 0; i < sortedList.length; i++) {
    // My seat is missing so
    // if my actual position + 2 is equal to my next seat
    // 516 + 2 = 518
    // means that my position is 517
    // 517 - 1 = 516
    // 517 + 1 = 518
    
    let seat = sortedList[i];

    if (sortedList[i + 1] == seat + 2) return seat + 1;
  }
};
