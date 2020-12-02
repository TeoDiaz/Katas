function check(input) {
  let total = 0;

  input.split("\n").map((ele) => {
    let split_ele = ele.split(" ");

    let num = split_ele[0].split("-");
    let letter = split_ele[1].split("")[0];
    let code = split_ele[2];

    let count = code.split(letter).length - 1;

    if (count >= num[0] && count <= num[1]) {
      total++;
    }
  });

  return total;
}

// 586
