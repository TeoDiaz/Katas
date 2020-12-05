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
