function start() {
  let noun = 1;
  let verb = 1;
  // noun is the address 1
  // verb is the address 2
  let program_value = 0;
  let new_input = [];

  while (program_value != 19690720) {
    new_input = [
      1,
      0,
      0,
      3,
      1,
      1,
      2,
      3,
      1,
      3,
      4,
      3,
      1,
      5,
      0,
      3,
      2,
      6,
      1,
      19,
      1,
      19,
      5,
      23,
      2,
      9,
      23,
      27,
      1,
      5,
      27,
      31,
      1,
      5,
      31,
      35,
      1,
      35,
      13,
      39,
      1,
      39,
      9,
      43,
      1,
      5,
      43,
      47,
      1,
      47,
      6,
      51,
      1,
      51,
      13,
      55,
      1,
      55,
      9,
      59,
      1,
      59,
      13,
      63,
      2,
      63,
      13,
      67,
      1,
      67,
      10,
      71,
      1,
      71,
      6,
      75,
      2,
      10,
      75,
      79,
      2,
      10,
      79,
      83,
      1,
      5,
      83,
      87,
      2,
      6,
      87,
      91,
      1,
      91,
      6,
      95,
      1,
      95,
      13,
      99,
      2,
      99,
      13,
      103,
      1,
      103,
      9,
      107,
      1,
      10,
      107,
      111,
      2,
      111,
      13,
      115,
      1,
      10,
      115,
      119,
      1,
      10,
      119,
      123,
      2,
      13,
      123,
      127,
      2,
      6,
      127,
      131,
      1,
      13,
      131,
      135,
      1,
      135,
      2,
      139,
      1,
      139,
      6,
      0,
      99,
      2,
      0,
      14,
      0,
    ];

    if (noun == 99) {
      noun = 0;
      verb++;
    }

    program_value = program(new_input, noun, verb);
    new_input = [];
    if (program_value == 19690720) return 100 * noun + verb;
    noun++;
  }
}

function program(codes, input1, input2) {
  codes[1] = input1;
  codes[2] = input2;

  let new_codes = codes;

  let pos = 0;

  while (codes[pos] != 99) {
    if (codes[pos] == 1) {
      new_codes[new_codes[pos + 3]] =
        new_codes[new_codes[pos + 1]] + new_codes[new_codes[pos + 2]];

      pos += 4;
    } else if (codes[pos] == 2) {
      new_codes[new_codes[pos + 3]] =
        new_codes[new_codes[pos + 1]] * new_codes[new_codes[pos + 2]];
      pos += 4;
    }
  }
  return new_codes[0];
}

// 7733