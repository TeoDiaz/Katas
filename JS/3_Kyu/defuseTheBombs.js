//There are a series of 10 bombs about to go off! Defuse them all! Simple, right?

//Note: This is not an ordinary Kata, but more of a series of puzzles. The point is to figure out what you are supposed to do, then how to do it. Instructions are intentionally left vague.

// Defuse all of the Bombs!
let num = Bomb.key

for (let i = 0; i <= 6; i++) {
  Bomb.diffuse(num)
  if (i == 5) {
    num = this.BombKey
  }
}

let diffuseTheBomb = () => { return num }
Bomb.diffuse(diffuseTheBomb())

//let decodedData = window.atob("VGhlIGtleSBpcyAiMy4xNDE1OSI");
//console.log(decodedData)
//The key is "3.14159"
Bomb.diffuse(3.14159)

let date = new Date()
date.setYear(date.getFullYear() - 4);
Bomb.diffuse(date)

Bomb.key = 43
Object.defineProperty(Bomb, "key", { writable: false });
Bomb.diffuse(Bomb)

Object.defineProperty(Bomb, "key", { writable: true });

function myNum(n) {
  this.number = n;
}
let checked = true
myNum.prototype.valueOf = function () {
  if (checked) {
    checked = false
    return this.number = 9
  } else {
    return this.number = 11;
  }
};
myObj = new myNum();
Bomb.diffuse(myObj)

Bomb.key = 42

let called = false
Math.random = () => {
    if(called){
      return 1
    }
    called = true
   return 0.5
}
Bomb.diffuse(Bomb.key)
let code = 'eWVz'
Array.prototype.valueOf = function(){
return this.reduce(function(a,b){return a+b},0)}
Bomb.diffuse(code)
//

console.log("\n")
console.log(Bomb.diffuse.toString())

console.log("\n")
console.log(Bomb);
