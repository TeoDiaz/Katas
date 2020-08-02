function password(min, max) {
  const matching = [];
  for (i = min; i <= max; i++) {
    const str = i.toString();
    const array = [...str];
    // /(.)\1/ -> means if adjacent element is equal
    if (str.length == 6 && /(.)\1/.test(str) && str == array.sort().join("")) {
      matching.push(str);
    }
  }
  return matching.length;
}

password(146810, 612564);

// 1748