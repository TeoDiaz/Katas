const fs = require("fs");

const lines = fs
  .readFileSync("day12.txt", { encoding: "utf-8" }) // read day??.txt content
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

const getInput = () => {
  // return map into num values
  // get start and end points
  const res = {
    start: {},
    end: {},
  };
  res.map = lines.map((line, y) =>
    [...line].map((value, x) => {
      if (value == "S") {
        res.start = { y, x };
        return 0;
      }
      if (value == "E") {
        res.end = { y, x };
        return 25;
      }
      return value.charCodeAt(0) - "a".charCodeAt(0);
    })
  );

  return res;
};

const pointToInt = (x, y) => {
  return y * 1e3 + x;
};

const intToPoint = (int) => {
  return {
    y: Math.floor(int / 1e3),
    x: int % 1e3,
  };
};

const neighbours = (x, y, map) => {
  const res = [];
  if (y + 1 < map.length) {
    res.push(pointToInt(x, y + 1));
  }
  if (y - 1 < map.length) {
    res.push(pointToInt(x, y - 1));
  }
  if (x + 1 < map[y].length) {
    res.push(pointToInt(x + 1, y));
  }
  if (y - 1 < map[y].length) {
    res.push(pointToInt(x - 1, y));
  }
};

const dijkstra = (map, start, end) => {
  const dist = {};
  const prev = {};
  const queue = [];
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const id = pointToInt(x, y);
      dist[id] = Infinity;
      queue.push(id);
    }
  }

  dist[pointToInt(start.x, start.y)] = 0;

  while (queue.length) {
    let min = null;
    for (const u of queue) {
      if (min == null || dist[u] < dist[min]) {
        min = u;
      }
    }

    queue = queue.filter((x) => x != min);
  }
};

function part1() {
  const input = getInput();
}

part1();

function part2() {
  //do something here
}

part2();
