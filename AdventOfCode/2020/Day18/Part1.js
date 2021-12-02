const check = (input) => {
  input = input.split("\n");
  const solve = (string) => {
    let tokens = string.split(" ");

    while (tokens.length > 1) {
      tokens = [eval(tokens.slice(0, 3).join(""))].concat(tokens.slice(3));
    }
    return tokens[0];
  };

  const solveWithParenthesis = (string) => {
    while (/\(/.test(string)) {
      string = string.replace(/\(([^()]+)\)/g, (match, group) => {
        return solve(group);
      });
    }
    return solve(string);
  };
  let acc = 0;
  input.forEach((element) => {
    console.log(solveWithParenthesis(element));
    acc += solveWithParenthesis(element);
  });

  return acc;
};
