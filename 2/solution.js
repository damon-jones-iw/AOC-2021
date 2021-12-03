const { readFileSync } = require('fs')
const fileContents = readFileSync('./2/data.txt', 'utf8')
const data = fileContents.split('\n')

const COMMAND = {
    FORWARD: 'forward',
    DOWN: 'down',
    UP: 'up'
}


let finalPosition = {
    h: 0,
    d: 0,
    aim: 0
}

const instructions = data.map((command) => {
    const result = command.split(' ');
    return { command: result[0], value: parseInt(result[1]) }
})

const part1 = (data) => {
    instructions.forEach((instruction) => {
        switch (instruction.command) {
            case COMMAND.FORWARD:
                finalPosition.h = finalPosition.h + instruction.value
                break;
            case COMMAND.DOWN:
                finalPosition.d = finalPosition.d + instruction.value
                break;
            case COMMAND.UP:
                finalPosition.d = finalPosition.d - instruction.value
                break;

            default:
                break;
        }
    })
    const finalDepth = finalPosition.h * finalPosition.d
    console.log(`Final depth: ${finalDepth}`)
}

const part2 = (data) => {
    instructions.forEach((instruction) => {
        switch (instruction.command) {
            case COMMAND.FORWARD:
                finalPosition.h = finalPosition.h + instruction.value
                finalPosition.d = finalPosition.d + (finalPosition.aim * instruction.value)
                break;
            case COMMAND.DOWN:
                finalPosition.aim = finalPosition.aim + instruction.value
                break;
            case COMMAND.UP:
                finalPosition.aim = finalPosition.aim - instruction.value
                break;

            default:
                break;
        }
    })
    const finalDepth = finalPosition.h * finalPosition.d
    console.log(`Final depth: ${finalDepth}`)
}

// part1(data)
part2(data)