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
        expect(calculator).toHaveProperty('multiply');
    });
    test("multiply 2 * 2 = 4", () => {
        expect(calculator.multiply(2, 2)).toBe(4);
    }); 
    test("multiply 4 * 4 = 16", () => {
        expect(calculator.multiply(4, 4)).toBe(16);
    });
});

// test("Capitalize A in awesome", () => {
//     expect(capitalize("awesome").toBe("Awesome"));
// });