let input = `R4, R5, L5, L5, L3, R2, R1, R1, L5, R5, R2, L1, L3, L4, R3, L1, L1, R2, R3, R3, R1, L3, L5, R3, R1, L1, R1, R2, L1, L4, L5, R4, R2, L192, R5, L2, R53, R1, L5, R73, R5, L5, R186, L3, L2, R1, R3, L3, L3, R1, L4, L2, R3, L5, R4, R3, R1, L1, R5, R2, R1, R1, R1, R3, R2, L1, R5, R1, L5, R2, L2, L4, R3, L1, R4, L5, R4, R3, L5, L3, R4, R2, L5, L5, R2, R3, R5, R4, R2, R1, L1, L5, L2, L3, L4, L5, L4, L5, L1, R3, R4, R5, R3, L5, L4, L3, L1, L4, R2, R5, R5, R4, L2, L4, R3, R1, L2, R5, L5, R1, R1, L1, L5, L5, L2, L1, R5, R2, L4, L1, R4, R3, L3, R1, R5, L1, L4, R2, L3, R5, R3, R1, L3`;

const noTimeForATaxicab = (input) => {
  const output = input
    .split(", ")
    .map((x) => {
      return {
        direction: x[0],
        steps: parseInt(x.substring(1, x.length)),
      };
    })
    .reduce(
      (accumulator, currentValue) => {
        switch (accumulator.heading) {
          case "N":
            accumulator.heading = currentValue.direction === "L" ? "W" : "E";
            accumulator.x +=
              currentValue.steps * (accumulator.heading === "W" ? -1 : 1);
            break;
          case "E":
            accumulator.heading = currentValue.direction === "L" ? "N" : "S";
            accumulator.y +=
              currentValue.steps * (accumulator.heading === "S" ? -1 : 1);
            break;
          case "S":
            accumulator.heading = currentValue.direction === "L" ? "E" : "W";
            accumulator.x +=
              currentValue.steps * (accumulator.heading === "W" ? -1 : 1);
            break;
          case "W":
            accumulator.heading = currentValue.direction === "L" ? "S" : "N";
            accumulator.y +=
              currentValue.steps * (accumulator.heading === "S" ? -1 : 1);
            break;
        }

        return accumulator;
      },
      { heading: "N", x: 0, y: 0 }
    );

  return Math.abs(output.x) + Math.abs(output.y);
};

noTimeForATaxicab(input);
