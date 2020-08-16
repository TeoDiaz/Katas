function boxes(input) {
  let areas = 0

  input.split("\n").map(ele => {
    let [l,w,h] = ele.split("x")

    let smallest = l*w
    if(l*h < smallest) smallest = l*h
    if(w*h < smallest) smallest = w*h

    areas += ((2*l*w) + (2*w*h) + (2*h*l) + smallest)
  })


  return areas
}

// 1598415