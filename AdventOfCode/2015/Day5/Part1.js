function nice(input) {
  let not_include_array = ["ab", "cd", "pq", "xy"];

  let array_with_strings = input.split`\n`.filter(
    (string) =>
      string.split(/[aeiou]/).length > 3 &&
      string.match(/(.)\1/) &&
      !not_include_array.some((str) => string.includes(str))
  );

  return array_with_strings.length;
}
