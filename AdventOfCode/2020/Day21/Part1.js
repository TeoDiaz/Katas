const fs = require("fs");

const lines = fs.readFileSync("day21.txt", { encoding: "utf-8" }).split("\n");

let map = {};

lines.forEach((x) => {
  let foods = x.split(" (contains ")[0];

  let ingredients = x.split(" (contains ")[1].split("");
  ingredients.pop();
  ingredients = ingredients.join("");
  ingredients = ingredients.replace(",", "");

  ingredients.split(" ").forEach((x) => {
    foods.split(" ").forEach((food) => {
      if (map[x]) {
        map[x].push(food);
      } else {
        map[x] = [food];
      }
    });
  });
});

console.log(map);
