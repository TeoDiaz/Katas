function check(input) {
  let instructions = input.split("\n");

  let coords = { NS: 0, EW: 0 };
  let facing = "E";

  instructions.forEach((ele, ind) => {
    let direction = ele.match(/[a-zA-Z]+|[0-9]+/g)[0];
    let move = Number(ele.match(/[a-zA-Z]+|[0-9]+/g)[1]);

    if (direction == "L") {
      if (facing == "N") {
        if (move == 90) {
          facing = "W";
        } else if (move == 180) {
          facing = "S";
        } else if (move == 270) {
          facing = "E";
        }
      } else if (facing == "S") {
        if (move == 90) {
          facing = "E";
        } else if (move == 180) {
          facing = "N";
        } else if (move == 270) {
          facing = "W";
        }
      } else if (facing == "E") {
        if (move == 90) {
          facing = "N";
        } else if (move == 180) {
          facing = "W";
        } else if (move == 270) {
          facing = "S";
        }
      } else if (facing == "W") {
        if (move == 90) {
          facing = "S";
        } else if (move == 180) {
          facing = "E";
        } else if (move == 270) {
          facing = "N";
        }
      }
    } else if (direction == "R") {
      if (facing == "N") {
        if (move == 90) {
          facing = "E";
        } else if (move == 180) {
          facing = "S";
        } else if (move == 270) {
          facing = "W";
        }
      } else if (facing == "S") {
        if (move == 90) {
          facing = "W";
        } else if (move == 180) {
          facing = "N";
        } else if (move == 270) {
          facing = "E";
        }
      } else if (facing == "E") {
        if (move == 90) {
          facing = "S";
        } else if (move == 180) {
          facing = "W";
        } else if (move == 270) {
          facing = "N";
        }
      } else if (facing == "W") {
        if (move == 90) {
          facing = "N";
        } else if (move == 180) {
          facing = "E";
        } else if (move == 270) {
          facing = "S";
        }
      }
    } else if (direction == "N") {
      coords["NS"] = coords["NS"] + move;
    } else if (direction == "S") {
      coords["NS"] = coords["NS"] - move;
    } else if (direction == "E") {
      coords["EW"] = coords["EW"] + move;
    } else if (direction == "W") {
      coords["EW"] = coords["EW"] - move;
    } else if (direction == "F") {
      console.log(facing);
      if (facing == "N") {
        coords["NS"] = coords["NS"] + move;
      } else if (facing == "S") {
        coords["NS"] = coords["NS"] - move;
      } else if (facing == "E") {
        coords["EW"] = coords["EW"] + move;
      } else if (facing == "W") {
        coords["EW"] = coords["EW"] - move;
      }
    }
  });

  console.log(coords);
  let manhattan = Math.abs(coords["NS"]) + Math.abs(coords["EW"]);
  console.log(manhattan);
}
