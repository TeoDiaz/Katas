function check(input) {
  let ecl = "ecl",
    pid = "pid",
    eyr = "eyr",
    hcl = "hcl",
    byr = "byr",
    iyr = "iyr",
    hgt = "hgt";

  let valueObj = {};

  let total = 0;
  let num = 1;

  let map = input.split("\n");

  for (let i = 0; i < map.length; i++) {
    valueObj[num] = (valueObj[num] || "") + " " + map[i];

    if (map[i] == "") {
      num++;
    }
  }

  let valid = 0;

  Object.values(valueObj).map((ele) => {
    if (
      ele.includes(ecl) &&
      ele.includes(pid) &&
      ele.includes(eyr) &&
      ele.includes(hcl) &&
      ele.includes(byr) &&
      ele.includes(iyr) &&
      ele.includes(hgt)
    ) {
      ele.split(" ").map((prop) => {
        prop.split(" ").map((val) => {
          value = val.split(":");

          if (value[0] == "byr" && value[1] >= 1920 && value[1] <= 2002) {
            valid++;
          } else if (
            value[0] == "iyr" &&
            value[1] >= 2010 &&
            value[1] <= 2020
          ) {
            valid++;
          } else if (
            value[0] == "eyr" &&
            value[1] >= 2020 &&
            value[1] <= 2030
          ) {
            valid++;
          } else if (value[0] == "hgt") {
            let matches = value[1].split(/(\d+)/);

            if (matches[2] == "cm" && matches[1] >= 150 && matches[1] <= 193) {
              valid++;
            } else if (
              matches[2] == "in" &&
              matches[1] >= 59 &&
              matches[1] <= 76
            ) {
              valid++;
            }
          } else if (value[0] == "hcl") {
            let check_letter = /[a-f]/;
            let check_number = /[0-9]/;

            let split = value[1].split("");
            if (split[0] == "#" && split.length == 7) {
              split.shift();

              split_without_hastag = split.join("");

              if (
                check_letter.test(split_without_hastag) ||
                check_number.test(split_without_hastag)
              ) {
                valid++;
              }
            }
          } else if (value[0] == "ecl") {
            let substrings = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

            let match = substrings.some((substring) =>
              value[1].includes(substring)
            );

            if (match) {
              valid++;
            }
          } else if (value[0] == "pid" && value[1].length == 9) {
            valid++;
          }
        });
      });
    }

    if (valid >= 7) {
      total++;
    }
    valid = 0;
  });

  return total;
}
