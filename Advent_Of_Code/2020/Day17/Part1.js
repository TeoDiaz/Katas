const fs = require("fs");

const lines = fs
  .readFileSync("day17.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)
  .map((x) => [...x]);

let map = new Map();

lines.forEach((line, y) => {
  line.forEach((value, x) => {
    const active = value === "#";
    const id = [x, y, 0].join`,`;

    map.set(id, active);
  });
});

function getNeighbours(x, y, z, map) {
  const results = [];
  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      for (let k = z - 1; k <= z + 1; k++) {
        if (i != x || j != y || k != z) {
          const key = [i, j, k].join`,`;

          if (map.has(key)) {
            results.push(map.get(key));
          } else {
            results.push(false);
          }
        }
      }
    }
  }
  return results;
}

for (let i = 0; i < 6; i++) {
  const keys = map.keys();
  let minX = null;
  let minY = null;
  let minZ = null;
  let maxX = null;
  let maxY = null;
  let maxZ = null;

  for (const key of keys) {
    const [x, y, z] = key.split(",").map((x) => parseInt(x));
    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (z < minZ) minZ = z;
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
    if (z > maxZ) maxZ = z;
  }

  const newState = new Map();

  for (let x = minX - 1; x <= maxX + 1; x++) {
    for (let y = minY - 1; y <= maxY + 1; y++) {
      for (let z = minZ - 1; z <= maxZ + 1; z++) {
        const neighbours = getNeighbours(x, y, z, map);
        const activeNeighbours = neighbours.filter((x) => x).length;
        const key = [x, y, z].join`,`;
        const isActive = map.has(key) ? map.get(key) : false;

        if (isActive && activeNeighbours !== 2 && activeNeighbours !== 3) {
          newState.set(key, false);
        } else if (!isActive && activeNeighbours === 3) {
          newState.set(key, true);
        } else {
          newState.set(key, isActive);
        }
      }
    }
  }

  map = newState;
}

let sum = 0;
let cubes = map.values();

for (const cube of cubes) {
  if (cube) sum++;
}

console.log(sum);
