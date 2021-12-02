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
    valueObj[num] = (valueObj[num] || "") + map[i];

    if (map[i] == "") {
      num++;
    }
  }

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
      total++;
    }
  });

  return total;
}
