function check(input) {
  let valueObj = {};
  let num = 1;
  let map = input.split("\n");
  let total = 0;

  for (let i = 0; i < map.length; i++) {
    valueObj[num] = (valueObj[num] || "") + " " + map[i];

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
