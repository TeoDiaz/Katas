// Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

// The keypad has the following layout:

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

// He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

// * possible in sense of: the observed PIN itself and all variations considering the adjacent digits

// Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

// Detective, we count on you!

function getPINs(observed) {
  let strLength = observed.length;
  let count = 0;
  let pinSwitched = [];
  let result = [];
  let num1 = ["1", "2", "4"];
  let num2 = ["1", "2", "3", "5"];
  let num3 = ["3", "2", "6"];
  let num4 = ["4", "1", "5", "7"];
  let num5 = ["5", "2", "6", "4", "8"];
  let num6 = ["6", "3", "5", "9"];
  let num7 = ["7", "8", "4"];
  let num8 = ["5", "8", "7", "9", "0"];
  let num9 = ["9", "8", "6"];
  let num0 = ["8", "0"];

  //123
  //456
  //789
  //*0*
  observed = observed.split("");
  observed.forEach(ele => {
    switch (ele) {
      case "1":
        pinSwitched.push(num1);
        break;
      case "2":
        pinSwitched.push(num2);
        break;
      case "3":
        pinSwitched.push(num3);
        break;
      case "4":
        pinSwitched.push(num4);
        break;
      case "5":
        pinSwitched.push(num5);
        break;
      case "6":
        pinSwitched.push(num6);
        break;
      case "7":
        pinSwitched.push(num7);
        break;
      case "8":
        pinSwitched.push(num8);
        break;
      case "9":
        pinSwitched.push(num9);
        break;
      case "0":
        pinSwitched.push(num0);
        break;
    }
  });
  result = pinSwitched[0];
  if (pinSwitched.length < 2) {
    result = pinSwitched;
    return result[0];
  } else {
    for (let x = 1; x < pinSwitched.length; x++) {
      let newResult = [];
      pinSwitched[x].forEach(ele => {
        result.forEach(item => {
          newResult.push(item.concat(ele));
        });
      });
      result = newResult;
    }

    return result;
  }
}
