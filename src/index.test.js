import { capitalize } from './index.js';

test("capitalize('awesome') returns 'Awesome'", () => {
    expect(capitalize("awesome")).toBe("Awesome");
});
test("capitalize('cookies') returns 'Cookies'", () => {
    expect(capitalize("cookies")).toBe("Cookies");
});

// test("Capitalize A in awesome", () => {
//     expect(capitalize("awesome").toBe("Awesome"));
// });