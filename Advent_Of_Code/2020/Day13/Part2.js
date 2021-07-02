const check = (input) => {
  const [firstBus, ...buses] = input
    .split("\n")[1]
    .split(",")
    .map((n, i) => [parseInt(n, 10), i])
    .filter(([n]) => !Number.isNaN(n));

  let multiplier = firstBus[0];
  let i = 0;

  buses.forEach(([bus, busIndex]) => {
    while (true) {
      console.log(i + busIndex);
      if ((i + busIndex) % bus === 0) {
        multiplier *= bus;
        break;
      }
      i += multiplier;
    }
  });

  return i;
};
