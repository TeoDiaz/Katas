function mix(s1, s2) {
  let obj1 = {};
  let obj2 = {};
  let finalobj = {};
  let arr = [];
  let finalstring = "";

  s1.split("").map((char) => (obj1[char] = (obj1[char] || 0) + 1));

  s2.split("").map((char) => (obj2[char] = (obj2[char] || 0) + 1));

  for (char1 in obj1) {
    char1Up = char1.toUpperCase();
    for (char2 in obj2) {
      char2Up = char2.toUpperCase();
      if (obj1[char1] <= 1 && obj2[char2] <= 1) {
      } else {
        if (char1 != char1Up && char2 != char2Up) {
          if (char1 == char2 && obj1[char1] > obj2[char2]) {
            finalobj[char1] = {
              str: "1:" + char1.repeat(obj1[char1]),
              len: obj1[char1],
            };
          } else if (char1 == char2 && obj1[char1] == obj2[char2]) {
            finalobj[char2] = {
              str: "=:" + char2.repeat(obj2[char2]),
              len: obj2[char2],
            };
          } else if (char1 == char2 && obj1[char1] < obj2[char2]) {
            finalobj[char2] = {
              str: "2:" + char2.repeat(obj2[char2]),
              len: obj2[char2],
            };
          }
        }
      }
    }
  }


  function sortObject(finalobj) {
        let values = Object.values(finalobj)
        let keys = Object.keys(finalobj)
        let strLen = 0
        
        for(let i = 0; i<values.length; i++){
             let value = getMax(finalobj)
           
          
            let pop =""

            
            if(arr.length>0) pop = arr[arr.length-1]
            
            if(pop.length == value.length){
              if(pop < value){
                  arr.push(value)
              }else{
                arr.splice(arr.length-1, 0, value);
              }
            }else{
                arr.push(value)
            }
        }
        
        return arr.join("/")
  }
  
  
  function getMax(finalobj) {
      let count = 0
      let max_str = 0
      let object 
      for (obj in finalobj){
          if(count < finalobj[obj].len) {
              count = finalobj[obj].len
              max_str = finalobj[obj].str
              object = obj
          }
      }
      delete finalobj[object]
      return max_str
  }

  return sortObject(finalobj);
}

'2:eeeee/2:yy/=:hh/=:rr'

mix("Are they here", "yes, they are here");







function mix(s1, s2){
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split(''), arr1 = [], arr2 = [];
  alpha.map(function(x){
    let letter = x, reg = new RegExp(letter,'g');
    arr1.push(s1.match(reg) || []);
    arr2.push(s2.match(reg) || []);
  });
  
  const max1 = [], max2 = [], eql = [];
  arr1.forEach(function(x,ind){
    if(x.length > arr2[ind].length && x.length > 1) max1.push('1:'+x.join(''));
    if(x.length < arr2[ind].length && arr2[ind].length > 1) max2.push('2:'+arr2[ind].join(''));
    if(x.length == arr2[ind].length && x.length > 1) eql.push('=:'+x.join(''))
  });
  
  let str = max1.concat(max2).concat(eql).sort(function(a,b){
    if(b.length == a.length){
      if(a.charCodeAt(0) == b.charCodeAt(0)) return a.charCodeAt(2) - b.charCodeAt(2);
      else return a.charCodeAt(0) - b.charCodeAt(0)
    }
    else return b.length - a.length
  })
  return str.join('/')
}

'2:eeeee/2:yy/=:hh/=:rr'

mix("Are they here", "yes, they are here");

