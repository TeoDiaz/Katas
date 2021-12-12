const fs = require("fs");

const lines = fs
  .readFileSync("day12.txt")
  .toString()
  .split("\n")
  .map((line) => line.split("-"));

const routes = {};

lines.forEach(([from, to]) => {
  if (routes[from]) {
    routes[from].push(to);
  } else {
    routes[from] = [to];
  }

  if (routes[to]) {
    routes[to].push(from);
  } else {
    routes[to] = [from];
  }
});

function isLowerCase(path) {
  return path == path.toLowerCase();
}

let validPaths = new Set();

function allValidPaths(from, paths = []) {
  let visited = [];
  
  if (!visited.includes(from)) {
    visited = [...paths, from];
  }

  routes[from].forEach((path) => {
    if (path == "start") return;
    if (isLowerCase(path) && visited.includes(path)) {
      return;
    }

    allValidPaths(path, visited);
  });

  if (visited[visited.length - 1] == "end") {
    for (key in routes) {
      if (isLowerCase(key) && key != "start" && key != "end") {
        if (visited.join(",").includes(key)) validPaths.add(visited.join(","));
      }
    }
  }
}

allValidPaths("start");

console.log(validPaths.size);
