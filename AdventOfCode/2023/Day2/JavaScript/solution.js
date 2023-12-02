const fs = require("fs");

const lines = fs
  .readFileSync("day2.txt", { encoding: "utf-8" }) // read day??.txt content
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

function part1() {
  // 12 red cubes, 13 green cubes, and 14 blue cubes

  let games_ok = [];

  lines.forEach((line) => {
    game = {
      id: 0,
      valid: true,
    };

    const { groups } = /^Game (?<game>.*): (?<sets>.*)$/.exec(line);

    game.id = parseInt(groups.game);

    const sets = groups.sets.split(";").forEach((set) => {
      set.split(",").forEach((cube) => {
        const { groups } = /^(?<num>.*) (?<color>.*)$/.exec(cube);

        if (groups.color == "red" && groups.num > 12) game.valid = false;
        if (groups.color == "green" && groups.num > 13) game.valid = false;
        if (groups.color == "blue" && groups.num > 14) game.valid = false;
      });
    });

    if (game.valid) games_ok.push(game.id);
  });

  let total = 0;
  games_ok.forEach((num) => {
    total += num;
  });

  return total;
}

console.log("PART 1: ", part1()); // 2879

function part2() {
  games_power = [];

  lines.forEach((line) => {
    let game = {
      red: 0,
      green: 0,
      blue: 0,
    };

    const { groups } = /^Game (?<game>.*): (?<sets>.*)$/.exec(line);
    groups.sets
      .replaceAll(";", ",")
      .split(", ")
      .forEach((cube) => {
        const { groups } = /^(?<num>.*) (?<color>.*)$/.exec(cube);
        if (game[groups.color] < parseInt(groups.num))
          game[groups.color] = parseInt(groups.num);
      });

    games_power.push(game.red * game.green * game.blue);
  });

  let total = 0;
  games_power.forEach((num) => {
    total += num;
  });

  return total;
}

console.log("PART 2: ", part2()); // 65122
