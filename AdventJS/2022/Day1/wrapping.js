function wrapping(gifts) {
  let wrap = "*";
  let wrapped = [];

  gifts.forEach((gift) => {
    let count = gift.length + 2;
    let paper = wrap.repeat(count);

    wrapped.push(`${paper}\n*${gift}*\n${paper}`);
  });

  return wrapped;
}

/* 
    [
     "******\n*book*\n******",
     "******\n*game*\n******",
     "*******\n*socks*\n*******"
    ] 
  */

// https://adventjs.dev/es/challenges/2022/1
