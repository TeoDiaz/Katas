process.stdin.resume();

function solution(str, slice_num) {
  str = str.trim();

  let slice = str.slice(0, slice_num);

  new_str = cyclic(slice, str.length / slice_num);
  if (str == new_str) {
    console.log(slice_num);
  } else {
    solution(str, slice_num + 1);
  }
}

function cyclic(str, length) {
  let new_str = str;
  str = str;
  for (let i = 0; i < length - 1; i++) {
    let arr = [...str];
    let last_char = str[str.length - 1];

    arr.pop();
    arr.unshift(last_char);
    str = arr.join("");
    new_str = new_str + str;
  }
  
  return new_str;
}

_input = "";
process.stdin.on("data", function (input) {
  _input += input;
  solution(_input, 1);
});
