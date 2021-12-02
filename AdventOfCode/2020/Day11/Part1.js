const lines = input.split("\n");

class Seating {
  constructor(lines) {
    this.height = lines.length;
    this.width = lines[0].length;

    this.seats = lines;
  }

  nextState() {
    let hasChanged = false;

    const updatedSeats = [];

    this.seats.forEach((line, y) => {
      let updated = "";

      [...line].forEach((seat, x) => {
        let occupied = 0;

        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (
              (i != 0 || j != 0) &&
              y + i >= 0 &&
              y + i < this.height &&
              x + j >= 0 &&
              x + j < this.width &&
              this.seats[y + i][x + j] === "#"
            ) {
              occupied++;
            }
          }
        }

        if (seat == "L" && occupied === 0) {
          updated += "#";
          hasChanged = true;
        } else if (seat == "#" && occupied >= 4) {
          updated += "L";
          hasChanged = true;
        } else {
          updated += seat;
        }
      });
      updatedSeats.push(updated);
    });
    this.seats = updatedSeats;

    return hasChanged;
  }

  getOcupiedSeats() {
    let occupied = 0;
    this.seats.forEach((line) => {
      [...line].forEach((seat) => {
        if (seat === "#") {
          occupied++;
        }
      });
    });
    return occupied;
  }
}

const check = (input) => {
  const s = new Seating(lines);

  while (s.nextState()) {}

  console.log(s.getOcupiedSeats());

  return;
};
