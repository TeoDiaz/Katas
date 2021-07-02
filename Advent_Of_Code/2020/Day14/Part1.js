const check = (input) => {
  let split = input
    .split("\n")
    .join(" ")
    .split(/\s+(?:mask)\s+/);
  let total = 0;

  let obj = {};
  let sum = 0;

  split.forEach((input) => {
    let splitted = input.split("mem");
    let mask = splitted[0];
    mask = mask.split("=")[1];
    splitted.shift();
    let mem = splitted;

    mem.forEach((ele) => {
      let num = ele.split("=")[1];
      num = Number(num.trim());

      let binary = num.toString(2);

      let memoryNum = ele.match(/\d+/)[0].trim();

      let new_num = [];

      for (let i = 0; i < mask.length - binary.length; i++) {
        if (mask[i] == 1) {
          new_num.push(1);
        } else {
          new_num.push(0);
        }
      }
      for (let i = 0; i < binary.length; i++) {
        if (mask[new_num.length] == "X") {
          new_num.push(binary[i]);
        } else {
          new_num.push(mask[new_num.length]);
        }
      }
      new_num = parseInt(new_num.join(""), 2);

      obj[memoryNum] = new_num;
    });
  });

  Object.values(obj).forEach((ele) => {
    sum += ele;
  });

  console.log(obj);
  total += sum;

  return total;
};
