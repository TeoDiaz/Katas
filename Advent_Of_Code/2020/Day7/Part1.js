function check(input) {

  const parseContainBag = (value) => {
    const [color, rest] = value.split(" bags contain ");

    const contains = rest
      .split(",")
      .map((part) => part.match(/(\d+) ([\w\s]+) bags?/))
      .filter(Boolean)
      .map(([, count, color]) => ({ color, count: +count }));

    return { color, contains };
  };

  let bags = input.split("\n").map(parseContainBag);

  const findOptions = (color) => {
    let bagsList = [];
    let childBags = findChild(color);
    bagsList = bagsList.concat(childBags);

    childBags.forEach((childBag) => {
      const nestedBags = findOptions(childBag.color);
      
      if (nestedBags && nestedBags.length) {
        bagsList = bagsList.concat(nestedBags);
        bagsList = [...new Set(bagsList)];
      }
    });

    return bagsList;
  };

  const findChild = (color) => {
    let canContain = bags.filter((bag) => {
      return bag.contains.some((innerBag) => {
        return innerBag.color == color
      });
    });

    return canContain;
  };

  return findOptions("shiny gold").length;
}
