function boxes(input) {
  let sumRibbon = 0

  input.split("\n").map(ele => {
    let [l,w,h] = ele.split("x")
    l = +l
    w = +w
    h = +h
    
    let arr = [l,w,h]
    let small1 = Math.min(l, w, h)
    let index_small1 = arr.indexOf(small1)
    arr.splice(index_small1, 1)
    let small2 = Math.min(arr[0], arr[1])

    let sumSide = (small1)+(+small1)+(+small2)+(+small2)
    
    let multiplySide = l*w*h

    sumRibbon += sumSide + multiplySide
  })

  return sumRibbon
}

// 3812909