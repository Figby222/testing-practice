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
    multiply: (n1, n2) => n1 * n2
};

export { capitalize, reverseString, calculator };