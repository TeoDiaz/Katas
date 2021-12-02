function move(input){
  let floor = 0
  input.split("").map(ele => {
    if(ele == "(") floor++
    if(ele == ")") floor-- 
  })
  return floor
}

// 74