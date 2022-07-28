const { assert } = require("console");
const fs = require("fs");

const input = fs
  .readFileSync("day16.txt", { encoding: "utf-8" })
  .trim()

class Packet {
  constructor({ version, typeId }) {
    this.version = version;
    this.typeId = typeId;
    this.packets = [];
  }
}

/**
 * Take a binary string, return list of packets 
 */
function parsePackets(input, totalSubPackets = -1) {
  const packets = []
  let totalPackets = 0
  const startInputSize = input.length

  while (input.length > 0 && (totalSubPackets < 0 || totalPackets < totalSubPackets)) {
    if (/^0+$/.test(input)) {
      // Only zeros, most likely due to padding
      break;
    }

    const version = parseInt(input.substring(0, 3), 2)
    const typeId = parseInt(input.substring(3, 6), 2)
    const packet = new Packet({ version, typeId })

    totalPackets++
    input = input.substring(6)

    if (typeId == 4) {
      let binaryString = ""

      while (input[0] == "1") {
        binaryString += input.substring(1, 5)
        input = input.substring(5)
      }

      binaryString += input.substring(1, 5)
      input = input.substring(5)

      packet.value = parseInt(binaryString, 2)
    } else {
      const lengthTypeId = input[0]
      input = input.substring(1)
      if (lengthTypeId == "0") {
        const length = parseInt(input.substring(0, 15), 2)
        input = input.substring(15)

        const subPackets = input.substring(0, length)
        packet.packets = parsePackets(subPackets)

        input = input.substring(length)
      } else {
        const totalSubPackets = parseInt(input.substring(0, 11), 2)
        input = input.substring(11)

        packet.packets = parsePackets(input, totalSubPackets)

        input = input.substring(packet.packets.consumed)
      }
      
      switch (typeId) {
        case 0:
          packet.value = packet.packets.reduce((a, b) => a + b.value, 0)
          break;
        case 1:
          packet.value = packet.packets.reduce((a, b) => a * b.value, 1)
          break;
        case 2:
          packet.value = Math.min(...packet.packets.map(p => p.value))
          break;
        case 3:
          packet.value = Math.max(...packet.packets.map(p => p.value))
          break;
        case 5:
          packet.value = Number(packet.packets[0].value > packet.packets[1].value)
          break;
        case 6:
          packet.value = Number(packet.packets[0].value < packet.packets[1].value)
          break;
        case 7:
          packet.value = Number(packet.packets[0].value === packet.packets[1].value)
          break;
        default:
          break;
      }
    }

    packets.push(packet)
  }

  packets.consumed = startInputSize - input.length
  return packets
}

function sumVersions(packets) {
  return packets
    .map(p => p.version + sumVersions(p.packets))
    .reduce((a, b) => a + b, 0)
}

function hexToBinary(hex) {
  return [...hex].map(n => parseInt(n, 16).toString(2).padStart(4, '0')).join``
}

/**
 * Take an hexadecimal string, returns a number
 */
function part1(input) {
  const binary = hexToBinary(input)
  const packets = parsePackets(binary)

  return sumVersions(packets)
}

console.log(part1(input))

function part2(input) {
  const binary = hexToBinary(input)
  const packets = parsePackets(binary)

  return packets[0].value
}

console.log(part2(input))