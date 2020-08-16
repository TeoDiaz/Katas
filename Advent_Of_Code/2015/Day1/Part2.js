function move(input){
  let floor = 0
  let count = 0
  let floor_input = true

  input.split("").map(ele => {
    if(ele == "(") floor++
    if(ele == ")") floor-- 
    if(floor_input == true) count++
    if(floor == -1) floor_input = false
  })
  return result
}

// 1795