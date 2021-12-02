function password(min, max) {
  const matching = [];
  for (i = min; i <= max; i++) {
    const str = i.toString();
    const array = [...str];

    const count_obj = {};
    array.map((char) => (count_obj[char] = (count_obj[char] || 0) + 1));

    // Find count_obj if there's a tuple with one double character
    const find_double = Object.entries(count_obj).find(
      (tuple) => tuple[1] == 2
    );

    if (str.length == 6 && find_double && str == array.sort().join("")) {
      matching.push(str);
    }
  }
  return matching.length;
}

password(146810, 612564);

// 1180


function solution(str, slice_num) {
  let slice = str.slice(0, slice_num)
    
   new_str = cyclic(slice, str.length/slice_num, slice_num)
    if(str == new_str){
      console.log(slice_num)
    }else{
      solution(str, slice_num+1)
    }
  }
  
  function cyclic(str, length, slice_num) {
    let new_str = str
    str = str
    for(let i = 0; i<length-1; i++){
      let arr = [...str]
      let last_char = str[str.length-1]
      arr.pop()
      arr.unshift(last_char)
      str = arr.join("")
      new_str = new_str + str
    }
    console.log(new_str)
    return new_str
  }
  