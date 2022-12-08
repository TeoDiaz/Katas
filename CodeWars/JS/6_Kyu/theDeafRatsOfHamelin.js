/*
Story
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

Kata Task
How many deaf rats are there?

Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats
ex2 P O~ O~ ~O O~ has 1 deaf rat
ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
*/

var countDeafRats = function (town) {
  console.log(town);

  town = town.replace(/ /g, "");
  if (town == "P") return 0;

  splitted = town.split("P");

  count = 0;

  if (town[0] == "P") {
    split_pair = splitted[1].match(/.{1,2}/g);
    for (let i = 0; i < split_pair.length; i++) {
      split_value = split_pair[i].split("");

      if (split_value[1] == "O") count++;
    }

    return count;
  } else if (town[town.length - 1] == "P") {
    split_pair = splitted[0].match(/.{1,2}/g);
    for (let i = 0; i < split_pair.length; i++) {
      split_value = split_pair[i].split("");
      if (split_value[0] == "O") count++;
    }
    return count;
  }

  for (let x = 0; x < splitted.length; x++) {
    split_pair = splitted[x].match(/.{1,2}/g);

    for (let i = 0; i < split_pair.length; i++) {
      split_value = split_pair[i].split("");

      if (x == 0) {
        if (split_value[0] == "O") count++;
      } else {
        if (split_value[1] == "O") count++;
      }
    }
  }
  return count;
};
