function password(min, max) {
  const matching = [];
  for (i = min; i <= max; i++) {
    const str = i.toString();
    const array = [...str];

    const count_obj = {};
    array.map((char) => (count_obj[char] = (count_obj[char] || 0) + 1));

    // Find count_obj if there's a tuple with one double character
    const find_double = Object.entries(count_obj).find(
      (tuple) => tuple[1] == 2
    );

    if (str.length == 6 && find_double && str == array.sort().join("")) {
      matching.push(str);
    }
  }
  return matching.length;
}

password(146810, 612564);

// 1180
