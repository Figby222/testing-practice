import { capitalize, reverseString, calculator, caesarCipher, getCipherAlphabet, analyzeArray } from "./index.js";

test("capitalize('awesome') returns 'Awesome'", () => {
    expect(capitalize("awesome")).toBe("Awesome");
});
test("capitalize('cookies') returns 'Cookies'", () => {
    expect(capitalize("cookies")).toBe("Cookies");
});

describe("function reverseString()", () => {
    test("Reverses 'Hello'", () => {
        expect(reverseString("Hello")).toBe("olleH");
    });
    test("Reverses 'World!'", () => {
        expect(reverseString("World!")).toBe("!dlroW");
    });
});

describe("object calculator", () => {
    test("Contains multiply", () => {
        expect(calculator).toHaveProperty("multiply");
    });
    test("multiply 2 * 2 = 4", () => {
        expect(calculator.multiply(2, 2)).toBe(4);
    }); 
    test("multiply 4 * 4 = 16", () => {
        expect(calculator.multiply(4, 4)).toBe(16);
    });

    test("Contains add", () => {
        expect(calculator).toHaveProperty("add");
    });
    test("add 2 and 2 = 4", () => {
        expect(calculator.add(2, 2)).toBe(4);
    });
    test("add 4 and 4 = 8", () => {
        expect(calculator.add(4, 4)).toBe(8);
    });

    test("Contains subtract", () => {
        expect(calculator).toHaveProperty("subtract");
    });
    test("subtract 10 and 6 = 4", () => {
        expect(calculator.subtract(10, 6)).toBe(4);
    });
    test("subtract 20 and 12 = 8", () => {
        expect(calculator.subtract(20, 12)).toBe(8);
    });

    test("Contains divide", () => {
        expect(calculator).toHaveProperty("divide");
    });
    test("Divide 8 and 2 = 4", () => {
        expect(calculator.divide(8, 2)).toBe(4);
    });
    test("Divide 64 and 16 = 4", () => {
        expect(calculator.divide(48, 8)).toBe(6);
    });
});

describe("Caesar Cipher", () => {
    test("Passing ('hello', 1) returns 'IFMMP'", () => {
        expect(caesarCipher("hello", 1)).toBe("IFMMP");
    });
    test("Passing ('cookies', 3) returns 'FRRNLHV'", () => {
        expect(caesarCipher("cookies", 3)).toBe("FRRNLHV");
    });

    test("getCipherAlphabet(3) returns DEFGHIJKLMNOPQRSTUVWXYZABC", () => {
        expect(getCipherAlphabet(3)).toBe("DEFGHIJKLMNOPQRSTUVWXYZABC")
    })

    test("caesarCipher('hello', -3) returns 'EBIIL'", () => {
        expect(caesarCipher("hello", -3)).toBe("EBIIL");
    })
});

describe("analyzeArray()", () => {
    test("check if average in array", () => {
        expect(analyzeArray([6, 4, 0, 0, 1, 1])).toHaveProperty("average");
    })

    test ("check if average in array has proper value", () => {
        expect(analyzeArray([6, 4, 0, 0, 1, 1])).toHaveProperty("average", 2);
    })

    test("check if min in array", () => {
        expect(analyzeArray([6, 4, 0, 0, 1, 1])).toHaveProperty("min");
    })
    test("check if min in array has proper value", () => {
        expect(analyzeArray([6, 4, 0, 0, 1, 1])).toHaveProperty("min", 0);
    })

    test("check if max in array", () => {
        expect(analyzeArray([6, 4, 0, 0, 1, 1])).toHaveProperty("max");
    })
    test("check if max in array has proper value", () => {
        expect(analyzeArray([6, 4, 0, 0, 1, 1])).toHaveProperty("max", 6);
    })

    test("check if length exists in array", () => {
        expect(analyzeArray([6, 4, 0, 0, 1, 1])).toHaveProperty("length");
    })

    test("check if length has proper value in array", () => {
        expect(analyzeArray([6, 4, 0, 0, 1, 1])).toHaveProperty("length", 6);
    })
})
// test("Capitalize A in awesome", () => {
//     expect(capitalize("awesome").toBe("Awesome"));
// });