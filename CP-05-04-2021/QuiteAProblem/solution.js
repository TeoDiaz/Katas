process.stdin.resume();

function processInput(input) {
  arr = input.split("\n")
  output = []
 
  arr.forEach(input => {
    input = input.toLowerCase()
    input.includes("problem") ? output.push("yes") : output.push("no")
    })
    output.pop()
    process.stdout.write(output.join("\n"))
}

_input = "";
process.stdin.on('data', function(input) {
  _input += input
  processInput(_input)
})