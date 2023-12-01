const fs = require("fs");

const lines = fs
  .readFileSync("day9.txt", { encoding: "utf-8" }) // read day??.txt content
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

let matrix = new Array(5).fill(".").map(() => new Array(6).fill("."));
let snake = {
  0: { x: 0, y: 0 },
  1: { x: 0, y: 0 },
  2: { x: 0, y: 0 },
  3: { x: 0, y: 0 },
  4: { x: 0, y: 0 },
  5: { x: 0, y: 0 },
  6: { x: 0, y: 0 },
  7: { x: 0, y: 0 },
  8: { x: 0, y: 0 },
  9: { x: 0, y: 0 },
};

let visited = [];

const printMatrix = (arr) => {
  arr.reverse().forEach((ele) => {
    console.log(ele.join(" "));
  });
};

const moveHead = (ax, ay, nx, ny) => {
  if (matrix[ax][ay] == "0") {
    matrix[ax][ay] = ".";
  } else if (matrix[ax][ay] != ".") {
    matrix[ax][ay] = matrix[ax][ay];
  } else {
    matrix[ax][ay] = ".";
  }

  matrix[nx][ny] = "0";
};

const moveTail = (ax, ay, nx, ny, part) => {
  console.log("MOVE Part ->", part, "X:", nx, "Y:", ny);
  if (matrix[ax][ay] != ".") {
    matrix[ax][ay] = matrix[ax][ay];
  }
  visited.push(ax + "," + ay);
  matrix[nx][ny] = "" + part;
};

const adjacentPart = (actual, previousPart) => {
  let left = actual.y - 1 == previousPart.y && actual.x == previousPart.x;
  let right = actual.y + 1 == previousPart.y && actual.x == previousPart.x;
  let up = actual.x - 1 == previousPart.x && actual.y == previousPart.y;
  let down = actual.x + 1 == previousPart.x && actual.y == previousPart.y;
  let rightUp =
    actual.x - 1 == previousPart.x && actual.y + 1 == previousPart.y;
  let rightDown =
    actual.x + 1 == previousPart.x && actual.y + 1 == previousPart.y;

  let leftUp = actual.x - 1 == previousPart.x && actual.y - 1 == previousPart.y;
  let leftDown =
    actual.x + 1 == previousPart.x && actual.y - 1 == previousPart.y;

  return (
    left ||
    right ||
    up ||
    down ||
    rightUp ||
    leftUp ||
    rightUp ||
    leftDown ||
    rightDown
  );
};

function part2() {
  moveHead(0, 0, 0, 0);

  lines.forEach((ele) => {
    [direction, steps] = ele.split(" ");

    let Hax, Hay, Hnx, Hny, Tax, Tay, Tnx, Tny;
    while (steps > 0) {
      console.log("----------------");
      console.log(snake);
      let H = snake[0];

      switch (direction) {
        case "R":
          Hax = H.x;
          Hay = H.y;
          Hnx = H.x;
          Hny = H.y + 1;

          H.y = Hny;
          snake[0].x = Hnx;
          snake[0].y = Hny;

          moveHead(Hax, Hay, Hnx, Hny);
          break;
        case "L":
          Hax = H.x;
          Hay = H.y;
          Hnx = H.x;
          Hny = H.y - 1;

          H.y = Hny;
          moveHead(Hax, Hay, Hnx, Hny);
          break;
        case "U":
          Hax = H.x;
          Hay = H.y;
          Hnx = H.x + 1;
          Hny = H.y;

          H.x = Hnx;
          snake[0].x = Hnx;
          snake[0].y = Hny;
          moveHead(Hax, Hay, Hnx, Hny);
          break;
        case "D":
          Hax = H.x;
          Hay = H.y;
          Hnx = H.x - 1;
          Hny = H.y;

          H.x = Hnx;
          moveHead(Hax, Hay, Hnx, Hny);
          break;

        default:
          break;
      }

      for (const [key, value] of Object.entries(snake)) {
        if (key == 0) {
          continue;
        }
        console.log("KEY ->", key, value);
        let adjacent = adjacentPart(value, snake[key - 1]);

        let follow = snake[key - 1];
        T = snake[key];
        if (follow.x == 0 && follow.y == 0) {
          continue;
        }
        console.log("Actual ->", T, "Follow ->", follow, "Is Adjacent?", adjacent);
        switch (direction) {
          case "R":
            if (!adjacent) {
              Tax = T.x;
              Tay = T.y;
              Tnx = follow.x;
              Tny = follow.y - 1;

              T.x = Tnx;
              T.y = Tny;
              snake[key].x = Tnx;
              snake[key].y = Tny;
              moveTail(Tax, Tay, Tnx, Tny, key);
            }
            break;
          case "L":
            if (!adjacent) {
              Tax = T.x;
              Tay = T.y;
              Tnx = follow.x;
              Tny = follow.y + 1;

              T.x = Tnx;
              T.y = Tny;
              moveTail(Tax, Tay, Tnx, Tny);
            }
            break;
          case "U":
            if (!adjacent) {
              Tax = T.x;
              Tay = T.y;
              Tnx = follow.x - 1;
              Tny = follow.y;

              T.x = Tnx;
              T.y = Tny;
              snake[key].x = Tnx;
              snake[key].y = Tny;
              moveTail(Tax, Tay, Tnx, Tny, key);
            }
            break;
          case "D":
            if (!adjacent) {
              Tax = T.x;
              Tay = T.y;
              Tnx = follow.x + 1;
              Tny = follow.y;

              T.x = Tnx;
              T.y = Tny;
              moveTail(Tax, Tay, Tnx, Tny);
            }

            break;

          default:
            break;
        }
      }
      steps--;
    }
  });
  printMatrix(matrix);

  console.log([...new Set(visited)].length);
}

part2();
