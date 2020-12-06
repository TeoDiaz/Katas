const getMax = (rows) => {
  let rest = Math.ceil((rows[1] - rows[0]) / 2);

  let pos = rows[1] - rest;
  return pos;
};

const getMin = (rows) => {
  let rest = Math.ceil((rows[1] - rows[0]) / 2);

  let pos = rows[0] + rest;
  return pos;
};

const part1 = (input) => {
  let id = 0;

  input.split("\n").map((ele) => {
    let rows = [0, 127]; // 0-127
    let col = [0, 7]; // 0-7
    console.log(ele);
    ele.split("").map((move) => {
      switch (move) {
        case "F":
          rows[1] = getMax(rows);
          break;
        case "B":
          rows[0] = getMin(rows);
          break;
        case "R":
          col[0] = getMax(col);
          break;
        case "L":
          col[1] = getMin(col);
          break;
      }
    });

    let take_id = 0;

    if (ele[ele.length - 1] == "R") {
      take_id = rows[0] * 8 + col[1];
    } else {
      take_id = rows[0] * 8 + col[0];
    }

    if (id < take_id) {
      id = take_id;
    }
  });
  return id;
};

// REFACTOR due to the previous answer is correct but not the implementation
const part1 = (input) => {
  let finalSeat = [];

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

  return ids.sort((a, b) => a - b).pop();
};
