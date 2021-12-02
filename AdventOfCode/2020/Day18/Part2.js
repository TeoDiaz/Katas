const goA = (input) => {
  input = input.split("\n");

  const resolveSum = (string) => {
    while (/\+/.test(string)) {
      string = string.replace(
        /(\d+) \+ (\d+)/g,
        (match, firstNum, secondNum) => {
          return Number(firstNum) + Number(secondNum);
        }
      );
    }
    return eval(string);
  };

  const solveWithParenthesis = (string) => {
    while (/\(/.test(string)) {
      string = string.replace(/\(([^()]+)\)/g, (match, group) => {
        return resolveSum(group);
      });
    }
    return resolveSum(string);
  };
  let acc = 0;
  input.forEach((element) => {
    console.log(solveWithParenthesis(element));
    acc += solveWithParenthesis(element);
  });

  return acc;
};
