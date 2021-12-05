// https://adventjs.dev/challenges/03

function isValid(letter) {
  let regex = /\(([^)]+)\)/;
  let characters = /[a-zA-Z]/;
  let regexInvalid = /^((?![(){}[\]]).)*$/;

  const groups = regex.exec(letter);

  if (groups && characters.test(groups[1])) {
    return regexInvalid.test(groups[1]);
  }
  return false;
}

// Examples

// "bici coche (balón) bici coche peluche" // -> ✅
// "(muñeca) consola bici" // ✅

// "bici coche (balón bici coche" // -> ❌
// "peluche (bici [coche) bici coche balón" // -> ❌
// "(peluche {) bici" // -> ❌
// "() bici" // ❌