function check(input) {
  let valueObj = {};
  let num = 1;
  let map = input.split("\n");
  let total = 0;

  for (let i = 0; i < map.length; i++) {
    valueObj[num] = (valueObj[num] || "") + map[i];

    if (map[i] == "") {
      num++;
    }
  }

  Object.values(valueObj).map((ele) => {
    let notDuplicate = ele.split("");
    let newSet = new Set(notDuplicate);
    notDuplicate = [...newSet].join("");

    total += notDuplicate.length;
  });

  return total;
}

// Refactor

function check(input) {
  const groups = input.split("\n\n");

  Array.prototype.sumSizes = function () {
    return this.reduce((acc, v) => acc + v.size, 0);
  };

  groups.map((g) => new Set(g.trim().split(/\s?/))).sumSizes();
}
