const fs = require("fs");

const map = fs
  .readFileSync("day15.txt", { encoding: "utf-8" })
  .trim()
  .split("\n")
  .map(x => [...x].map(Number));


// Dijkstra's algorithm pseudo code

/*   function Dijkstra(Graph, source):
 2      
 3      for each vertex v in Graph.Vertices:
 4          dist[v] ← INFINITY
 5          prev[v] ← UNDEFINED
 6          add v to Q
 7      dist[source] ← 0
 8      
 9      while Q is not empty:
10          u ← vertex in Q with min dist[u]
11          remove u from Q
12          
13          for each neighbor v of u still in Q:
14              alt ← dist[u] + Graph.Edges(u, v)
15              if alt < dist[v] and dist[u] is not INFINITY:
16                  dist[v] ← alt
17                  prev[v] ← u
18
19      return dist[], prev[] */

function coordinatesToIndex({ x, y }, map) {
  return x + y * map.length
}

function indexToCoordinates(index, map) {
  const x = index % map.length
  const y = (index - x) / map.length

  return {
    x: x,
    y: y
  }
}

function getNeighbours(index, map) {
  const { x, y } = indexToCoordinates(index, map)
  return [
    { x: x - 1, y },
    { x: x + 1, y },
    { x, y: y - 1 },
    { x, y: y + 1 }
  ].filter(({ x, y }) => x >= 0 && y >= 0 && x < map.length && y < map.length);
}

function part1(map) {
  const target = { x: map.length - 1, y: map.length - 1 }
  const targetIndex = coordinatesToIndex(target, map)

  const dist = Array(map.length * map.length).fill(Infinity)
  const prev = Array(map.length * map.length).fill(null)
  const Q = Array(map.length * map.length).fill(0).map((x, index) => index);

  dist[0] = 0

  while (Q.length > 0) {
    let min = Infinity;
    let minIndex = 0;

    for (let i = 0; i < Q.length; i++) {
      const element = Q[i];

      if (dist[element] < min) {
        min = dist[element];
        minIndex = i;
      }
    }

    const [u] = Q.splice(minIndex, 1);

    if (u == targetIndex) break;

    const neighbors = getNeighbours(u, map)
    for (const neighbor of neighbors) {
      const neighborIndex = coordinatesToIndex(neighbor, map)
      const alt = dist[u] + map[neighbor.y][neighbor.x]

      if (alt < dist[neighborIndex]) {
        dist[neighborIndex] = alt
        prev[neighborIndex] = u
      }
    }
  }
  console.log(dist[coordinatesToIndex(target, map)])
}

part1(map);

function part2(map) {
  part1(map)
}

const biggerMap = Array(5 * map.length)
  .fill(0)
  .map((_, y) =>
    Array(5 * map.length)
      .fill(0)
      .map((_, x) => {
        const originalX = x % map.length
        const originalY = y % map.length
        const offset = Math.floor(x / map.length) + Math.floor(y / map.length)
        const value = map[originalY][originalX] + offset
        return value > 9 ? value - 9 : value
      }))

part2(biggerMap)