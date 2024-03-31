import { capitalize, reverseString } from './index.js';

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

// test("Capitalize A in awesome", () => {
//     expect(capitalize("awesome").toBe("Awesome"));
// });