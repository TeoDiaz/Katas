function moves(input) {
  let houses = [[0, 0]];
  let santa = [0, 0];
  input.split("").map((ele) => {
    switch (ele) {
      case "^":
        santa[1]++;
        break;
      case "v":
        santa[1]--;
        break;
      case ">":
        santa[0]++;
        break;
      case "<":
        santa[0]--;
        break;
    }
    houses.push([santa[0], santa[1]]);
  });

  return eliminateDuplicates(houses).length;
}

function eliminateDuplicates(arr) {
  let i,
    out = [],
    obj = {};

  for (i = 0; i < arr.length; i++) {
    obj[arr[i]] = 0;
  }
  for (i in obj) {
    out.push(i);
  }

  return Object.keys(obj);
}


// 2565

// With better code 


function moves(input) {
  let x = 0
  let y = 0
  let houses = {}

  input.split("").map(ele => {
    switch (ele) {
      case '^':
        y++
        break;
      case 'v':
        y--
        break;
      case '>':
        x++
        break;
      case '<':
        x--
        break;
    }
    houses[[x, y]] = true
  })

  return Object.keys(houses).length
}
