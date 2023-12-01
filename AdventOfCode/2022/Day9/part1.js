const fs = require("fs");

const lines = fs
  .readFileSync("day9.txt", { encoding: "utf-8" }) // read day??.txt content
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

let matrix = new Array(500).fill(".").map(() => new Array(500).fill("."));
let H = { x: 250, y: 250 };
let T = { x: 250, y: 250 };
let visited = [];

const printMatrix = (arr) => {
  arr.reverse().forEach((ele) => {
    console.log(ele.join(" "));
  });
};

const moveHead = (ax, ay, nx, ny) => {
  if (T.x == ax && T.y == ay) {
    matrix[ax][ay] = "T";
  } else {
    matrix[ax][ay] = ".";
  }

  matrix[nx][ny] = "H";
};

const moveTail = (ax, ay, nx, ny) => {
  matrix[ax][ay] = ".";
  visited.push(ax + "," + ay);
  matrix[nx][ny] = "T";
};

const isAdjacent = (T) => {
  let actual = matrix[T.x][T.y];
  let left = matrix[T.x][T.y - 1] == undefined ? null : matrix[T.x][T.y - 1];
  let right = matrix[T.x][T.y + 1] == undefined ? null : matrix[T.x][T.y + 1];
  let up = matrix[T.x - 1] == undefined ? null : matrix[T.x - 1][T.y];
  let down = matrix[T.x + 1] == undefined ? null : matrix[T.x + 1][T.y];

  let rightDUp = matrix[T.x - 1] == undefined ? null : matrix[T.x - 1][T.y + 1];

  let leftDUp = matrix[T.x - 1] == undefined ? null : matrix[T.x - 1][T.y - 1];

  let rightDDown =
    matrix[T.x + 1] == undefined ? null : matrix[T.x + 1][T.y + 1];

  let leftDDown =
    matrix[T.x + 1] == undefined ? null : matrix[T.x + 1][T.y - 1];

  let adjacents = [
    actual,
    left,
    right,
    up,
    down,
    rightDUp,
    leftDUp,
    rightDDown,
    leftDDown,
  ];

  return adjacents.includes("H");
};

function part1() {
  moveHead(250, 250, 250, 250);

  lines.forEach((ele) => {
    [direction, steps] = ele.split(" ");

    let Hax, Hay, Hnx, Hny, Tax, Tay, Tnx, Tny;

    while (steps > 0) {
      switch (direction) {
        case "R":
          Hax = H.x;
          Hay = H.y;
          Hnx = H.x;
          Hny = H.y + 1;

          H.y = Hny;
          moveHead(Hax, Hay, Hnx, Hny);

          if (!isAdjacent(T)) {
            Tax = T.x;
            Tay = T.y;
            Tnx = H.x;
            Tny = H.y - 1;

            T.x = Tnx;
            T.y = Tny;
            moveTail(Tax, Tay, Tnx, Tny);
          }

          steps--;
          break;
        case "L":
          Hax = H.x;
          Hay = H.y;
          Hnx = H.x;
          Hny = H.y - 1;

          H.y = Hny;
          moveHead(Hax, Hay, Hnx, Hny);

          if (!isAdjacent(T)) {
            Tax = T.x;
            Tay = T.y;
            Tnx = H.x;
            Tny = H.y + 1;

            T.x = Tnx;
            T.y = Tny;
            moveTail(Tax, Tay, Tnx, Tny);
          }

          steps--;
          break;
        case "U":
          Hax = H.x;
          Hay = H.y;
          Hnx = H.x + 1;
          Hny = H.y;

          H.x = Hnx;
          moveHead(Hax, Hay, Hnx, Hny);

          if (!isAdjacent(T)) {
            Tax = T.x;
            Tay = T.y;
            Tnx = H.x - 1;
            Tny = H.y;

            T.x = Tnx;
            T.y = Tny;
            moveTail(Tax, Tay, Tnx, Tny);
          }

          steps--;
          break;
        case "D":
          Hax = H.x;
          Hay = H.y;
          Hnx = H.x - 1;
          Hny = H.y;

          H.x = Hnx;
          moveHead(Hax, Hay, Hnx, Hny);

          if (!isAdjacent(T)) {
            Tax = T.x;
            Tay = T.y;
            Tnx = H.x + 1;
            Tny = H.y;

            T.x = Tnx;
            T.y = Tny;
            moveTail(Tax, Tay, Tnx, Tny);
          }

          steps--;
          break;

        default:
          break;
      }
    }
  });

  console.log([...new Set(visited)].length);
}

part1();

function part2() {
  //do something here
}

part2();
