function capitalize(string) {
    const result = string[0].toUpperCase() + string.slice(1);
    return result;
}

function reverseString(string) {
    let result = "";
    for (let i = string.length - 1; i >= 0; i-=1) {
        result += string[i];
    }

    return result;
}

const calculator = {
    add: (n1, n2) => n1 + n2,
    subtract: (n1, n2) => n1 - n2,
    multiply: (n1, n2) => n1 * n2,
    divide: (n1, n2) => n1 / n2
};

function getCipherAlphabet(offset, alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
    let cipherAlphabet = alphabet;
    if (offset >= 0) {
        for (let i = 0; i < offset; i+=1) {
            cipherAlphabet = cipherAlphabet.concat("", cipherAlphabet[0]);
            cipherAlphabet = cipherAlphabet.slice(1)
        }
    } else {
        for (let i = 0; i > offset; i-=1) {
            cipherAlphabet = cipherAlphabet[cipherAlphabet.length - 1] + cipherAlphabet;
            cipherAlphabet = cipherAlphabet.slice(0, -1)
        }
    }
    return cipherAlphabet;
}

function caesarCipher(plaintext, offset, alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
    const cipherAlphabet = getCipherAlphabet(offset, alphabet);

    let result = "";
    for (let i = 0; i < plaintext.length; i++) {
        const currentCharIndex = alphabet.indexOf(plaintext[i].toUpperCase());
        result = result.concat("", cipherAlphabet[currentCharIndex]);
    }

    return result;
}

function getAverage(array) {
    let accumulator = 0;
    for (let i = 0; i < array.length; i+=1) {
        accumulator += array[i];
    }

    return accumulator / array.length;
}

function getMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i+=1) {
        min = array[i] < min ? array[i] : min;
    }
    return min;
}

function getMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i+=1) {
        max = array[i] > max ? array[i] : max;
    }
    return max;
}

function getLength(array) {
    let length = 0;
    for (let i = 0; i < array.length; i+=1) {
        length+=1;
    }
    return length;
}

function analyzeArray(array) {
    return {
        average: getAverage(array),
        min: getMin(array),
        max: getMax(array),
        length: getLength(array)
    }
}
export { capitalize, reverseString, calculator, caesarCipher, getCipherAlphabet, analyzeArray };