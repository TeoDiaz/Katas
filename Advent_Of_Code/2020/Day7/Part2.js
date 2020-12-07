function check(input) {
  let bagsObj = {};

  const parseContainBag = (value) => {
    const [color, rest] = value.split(" bags contain ");

    const contains = rest
      .split(",")
      .map((part) => part.match(/(\d+) ([\w\s]+) bags?/))
      .filter(Boolean)
      .map(([, count, color]) => ({ color, count: +count }));

    return (bagsObj[color] = { color, contains });
  };

  input.split("\n").map(parseContainBag);

  const bagsTotal = (color) => {
    return bagsObj[color].contains.reduce((acc, bag) => {
      let descendant = bagsTotal(bag.color);
      return acc + bag.count + bag.count * descendant;
    }, 0);
  };

  return bagsTotal("shiny gold");
}
