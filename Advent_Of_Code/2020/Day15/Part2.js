const check = (input) => {
  const find = 30000000;

  let numsMap = new Map();
  input.slice(0, input.length - 1).forEach((n, i) => numsMap.set(n, i));

  let lastNum = input[input.length - 1];
  let turn = input.length;

  while (turn < find) {
    let thisNum = 0;

    if (numsMap.has(lastNum)) {
      thisNum = turn - 1 - numsMap.get(lastNum);
    }

    numsMap.set(lastNum, turn - 1);

    lastNum = thisNum;
    
    turn++;
  }

  console.log(lastNum);
};

check([5, 1, 9, 18, 13, 8, 0]);
