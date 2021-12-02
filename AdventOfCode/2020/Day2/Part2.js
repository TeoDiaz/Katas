function check(input) {
  let total = 0;

  input.split("\n").map((ele) => {
    let split_ele = ele.split(" ");

    console.log(split_ele);

    let pos1 = split_ele[0].split("-")[0];
    let pos2 = split_ele[0].split("-")[1];
    let letter = split_ele[1].split("")[0];
    let code = split_ele[2];

    console.log(pos1);
    console.log(pos2);
    console.log(letter);
    console.log(code);
    console.log("POSITION " + pos1 + " IS " + code[pos1]);
    console.log("POSITION " + pos2 + " IS " + code[pos2]);

    if (code[pos1 - 1] == letter && code[pos2 - 1] == letter) {
      console.log("IN BOTH PLACES");
    } else if (code[pos1 - 1] == letter || code[pos2 - 1] == letter) {
      console.log("THE PASSWORD IS " + code);
      total++;
    } else {
      ("THERE'S NO COINCIDENCE");
    }
  });

  return total;
}

// 352