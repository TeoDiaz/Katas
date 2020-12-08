function check(input) {
  let valueObj = {};
  let num = 1;
  let map = input.split("\n");
  let acc = 0;
  let index = 1;

  for (let i = 0; i < map.length; i++) {
    valueObj[num] = {
      value: (valueObj[num] || "") + map[i],
      second_time: false,
    };
    num++;
  }

  function getValue(index) {
    let split = valueObj[index].value.split(" ");
    let second_time = valueObj[index].second_time;
    let str = split[0];
    let num = Number(split[1]);

    if (str == "nop" && !second_time) {
      valueObj[index].second_time = true;
      index++;
      getValue(index);
    } else if (str == "acc" && !second_time) {
      acc += num;
      valueObj[index].second_time = true;
      index++;
      getValue(index);
    } else if (str == "jmp" && !second_time) {
      valueObj[index].second_time = true;
      index += num;
      getValue(index);
    } else {
      console.log(acc);
    }
  }

  getValue(index);
}
