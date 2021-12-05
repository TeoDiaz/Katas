// https://adventjs.dev/challenges/04

function createXmasTree(height) {
  let tree = [];

  for (let i = 0; i < height; i++) {
    let line = "*"
      .repeat(2 * i + 1)
      .padStart(i + height, "_")
      .padEnd(height * 2 - 1, "_");

      tree.push(line);
  }

  let trunk = "#".padStart(height, "_").padEnd(height * 2 - 1, "_");

  tree.push(trunk);
  tree.push(trunk);

  return tree.join("\n");
}

// Example

console.log(createXmasTree(5));

// ____*____
// ___***___
// __*****__
// _*******_
// *********
// ____#____
// ____#____
