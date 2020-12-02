function nice(input) {
  let array_with_strings = input.split`\n`.filter(
    (string) => string.match(/(..).*?\1/) && string.match(/(.).\1/)
  );

  // (..).*?\1/ -> any two characters who repeats
  //  (.).\1 -> letter which repeats with exactly one letter between them

  return array_with_strings.length;
}
