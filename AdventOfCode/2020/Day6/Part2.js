// LOST MY SOLUTION :facepalm:

// Refactor using intersect

function check(input) {
  const groups = input.split("\n\n");

  const intersect = (l, r) => new Set([...l].filter((v) => r.has(v)));

  Array.prototype.sumSizes = function () {
    return this.reduce((s, v) => s + v.size, 0);
  };

return groups
    .map((g) =>
      g
        .trim()
        .split("\n")
        .map((x) => new Set(x))
        .reduce(intersect)
    )
    .sumSizes();
}
