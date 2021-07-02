let reminder = 0
let divisor = 0
let sum = 0

function solution(input) {
    nums = input.trim().split("\n")
    let output = []
   nums.shift()

  let min = nums.sort((a,b) => a-b)[0]

  while(divisor < min){
    reminder = nums[0] % divisor

    let equal = nums.every(check)
    
    if(equal){
      output.push(divisor)
    }
    
    divisor+=sum
  }
  
  console.log(output.join(" "))
}

function check(num){
 return num%divisor == reminder
}


// un numero x dividio por b da un resto v
// un numero y dividido por b da un resto v
// signigica que a - b = Multiplo de B

// sort 
// calcular el gcd de todos los numeros 

solution(`5
5
17
23
14
83
`)


