const { readFileSync } = require('fs')
const fileContents = readFileSync('./1/data.txt', 'utf8')
const data = fileContents.split('\n').map(n => Number(n))

const part1 = (data) => {
    let count = 0

    for (let i = 0; i < data.length; i++) {
        if (data[i] > data[i - 1]) count++
    };
    console.log(`${count} larger measurements`)
}

const part2 = (data) => {
    let count = 0

    for (let i = 1; i < data.length; i++) {
        const previous = data[i - 1] + data[i] + data[i + 1]
        const next = data[i] + data[i + 1] + data[i + 2]
        
        if (next > previous) {
            count++
        }
    }
    console.log(`${count} larger measurements`)
}


// part1(data)
part2(data)