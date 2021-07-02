const goA = (input) => {
  let split1 = Number(input.split("\n")[0]);
  let split2 = input.split("\n")[1].split(",");

  let schedule = {};

  split2.forEach((ele) => {
    ele = Number(ele);

    if (ele == "x") {
      return;
    }

    let time = 0;
    let ar = [];

    for (let i = 0; i < split1 + split1; i += ele) {
      time = i;

      ar.push(time);

      schedule[ele] = {
        time: ar,
      };
    }
  });

  let id = split1 + split1;
  let bus = 0;

  Object.keys(schedule).map((ele) => {
    if (ele == "NaN") {
      return;
    }
    for (let i = split1; i < split1 + split1 / 2; i++) {
      if (schedule[ele].time.includes(i)) {
        if (id > i) {
          id = i;
          bus = ele;
        }
      }
      console.log("INDEX = " + i);
      console.log("ACTUAL ELEMENT = " + ele);
      console.log("HOUR = " + id);
      console.log("BUS = " + bus);
    }
  });

  console.log(id);
  console.log(bus);

  return;
};

// Refactor

const part1 = () => {
  const [now, ...buses] = input
    .replace(/,x/g, "")
    .replace(/,/g, "\n")
    .split("\n")
    .map((n) => parseInt(n, 10));

  let time = now;
  let departing = buses.find((bus) => time % bus === 0);
  while (!departing) {
    time++;
    departing = buses.find((bus) => time % bus === 0);
  }
  return (time - now) * departing;
};
