// In this kata the story of a man and his trip to the hell of programming is summarized. Believing himself lucky to become a TA, he accepted the job with enthusiasm without knowing what a trip to exhaustion would bring.

// On this path our hero will slowly and painfully lose his sanity. Your writing will be irreversibly affected and today's goal is to help your writing regain normality

// When you write any sentence that contains a combination of laughter, the code may transform it like this : jajajaja => Ja Ja Ja Ja

// If the sentence contains a group of 3 periods, it may transform it like this : .euha.died.jaS => . . . => [...]

// The last challenge is a combination of both, if a sentence contains laughter and periods, your code may transform it like this : ja.jaa.je.ewjue => Ja Ja Ja . . .

const crazyTA = sentence => {
  let countJ = 0;
  let countA = 0;
  let countDot = 0;
  let dotTimes = 0;
  let times = 0;
  let str = "";
  sentence = sentence.split("");
  sentence.forEach(ele => {
    if (ele == "j") {
      countJ++;
    } else if (ele == "a") {
      countA++;
    } else if (ele == ".") {
      countDot++;
    }
  });
  if (countJ > countA) {
    times = countA;
  } else {
    times = countJ;
  }
  let numberOfDots = () => {
    if (countDot >= 3) {
      dotTimes += 3;
      countDot -= 3;
      numberOfDots();
    } else {
      return;
    }
  };

  if (countJ > 0 && countA > 0) {
    str += "Ja ".repeat(times);
    if (countDot >= 3 && times > 0) {
      str = "";
      numberOfDots();
      str += "Ja ".repeat(times);
      str += ". ".repeat(dotTimes);
    }
  } else if (countDot >= 3) {
    numberOfDots();
    str += ". ".repeat(dotTimes);
  }
  return str;
};
