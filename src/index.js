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
export { capitalize, reverseString, calculator, caesarCipher, getCipherAlphabet };