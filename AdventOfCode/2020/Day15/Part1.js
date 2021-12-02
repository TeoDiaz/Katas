const goA = (input) => {
  let ar = [];
  input.split(",").forEach((ele) => ar.push(Number(ele)));
  
  let turn = ar.length;
  let num = ar.length;

  while (turn < 30000000) {
    turn++;

    if (num == ar.length) {
      ar.push(0);

      num = 0;
    } else if (
      ar.includes(ar[ar.length - 1]) &&
      ar.indexOf(ar[ar.length - 1]) != ar.length - 1
    ) {
      let pos = 0;

      for (let i = 0; i < ar.length - 1; i++) {
        if (ar[i] == ar[ar.length - 1]) {
          pos = i;
        }
      }

      ar.push((turn - 1) - (pos + 1));
    } else {
      ar.push(0);
    }

    console.log(turn);
    console.log(ar[ar.length - 1]);
  }
  return ar[atob.length - 1];
};

// refactor in Day2
