function check(input) {
  let valueObj = {};
  let changeIndex = 1;
  let num = 1;
  let map = input.split("\n");
  let acc = 0;
  let index = 1;
  let code = 1

  function parseInput(input) {
    for (let i = 0; i < map.length; i++) {
      valueObj[num] = {
        value: (valueObj[num] || "") + map[i],
        second_time: false,
      };
      num++;
    }
  }

  function changeValue(changeIndex) {
    let split = valueObj[changeIndex].value.split(" ");
    let second_time = valueObj[changeIndex].second_time;
    let str = split[0];
    let num = Number(split[1]);
    
    if (str == "nop") {
      valueObj[changeIndex].value = `jmp ${num}`
    } else if (str == "jmp") {
      valueObj[changeIndex].value = `nop ${num}`;
    }
  }

  function getValue(index, obj) {
    let split = obj[index].value.split(" ");
    let second_time = obj[index].second_time;
    let str = split[0];
    let num = Number(split[1]);
    let last_item = Object.keys(obj).pop();

    if (last_item == index) {
        code = index
      return acc;
    } else if (str == "nop" && !second_time) {
      obj[index].second_time = true;
      index++;
      getValue(index, obj);
    } else if (str == "acc" && !second_time) {
      acc += num;
      obj[index].second_time = true;
      index++;
      getValue(index, obj);
    } else if (str == "jmp" && !second_time) {
      obj[index].second_time = true;
      index += num;
      getValue(index, obj);
    } else {
      return acc;
    }
  }

  const runCode = (input) => {
    parseInput(input);
    changeValue(changeIndex);
    getValue(index, valueObj);
    let split = valueObj[code].value.split(" ");
    let str = split[0];
    let objNum = Number(split[1]);
   
    let last_item = Object.keys(valueObj).pop();
    
    if (code == last_item) {
      if (str == "acc") {
        acc += objNum;
        console.log("LAST ITEM = " + acc);
        return acc;
      } else {
        console.log("LAST ITEM = " + acc);
      }
    }else{
         valueObj = {}
         num = 1
         index = 1
         code = 1
         acc = 0
         changeIndex++;
        runCode(input)   
      }
  };
  
  return runCode(input);
}