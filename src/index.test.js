import { capitalize, reverseString, calculator } from './index.js';

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
    })
    test("Divide 8 and 2 = 4", () => {
        expect(calculator.divide(8, 2)).toBe(4);
    })
    test("Divide 64 and 16 = 4", () => {
        expect(calculator.divide(48, 8)).toBe(6);
    })
});

// test("Capitalize A in awesome", () => {
//     expect(capitalize("awesome").toBe("Awesome"));
// });