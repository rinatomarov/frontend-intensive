// 1
function minNumber(a, b, c) {
    if (a < b && a < c) {
        return a
    } else if (b < a && b < c) {
        return b
    }
    return c
}

// console.log(minNumber(8,9,7))


// 2
function sequenceNumbers(number) {
    for (let cnt = 0; cnt < number; cnt++) {
        console.log(cnt)
    }
}

// sequenceNumbers(100)

// 3
function maxLength(str1, str2) {
    if (str1.length > str2.length) {
        return str1
    }
    return str2
}

// console.log(maxLength('Rinat', 'Dauren'))