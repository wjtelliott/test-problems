const subFunc = require("./rgbHex");
const solution = (r, g, b) => {
    const hexValue = (num) => {
        const hex = num.toString(16).toUpperCase();
        return [`0${hex}`, hex][+(hex.length > 1)];
    };
    const convertValues = (num) => {
        const nullVal = "00";
        if (num == null) return nullVal;
        const convert = typeof num !== "number" ? Number(num) : num;
        const clamp = Math.min(255, Math.max(0, convert));
        return isNaN(clamp) ? nullVal : hexValue(clamp);
    };
    return [r, g, b].map(convertValues).join("");
};

test("Should catch null values", () => {
    const args = [null, 2, 16];
    expect(subFunc(...args)).toBe(solution(...args));
});

test("Should catch non number strings", () => {
    const args = ["69", "22", 19];
    expect(subFunc(...args)).toBe(solution(...args));
});

test("Should clamp numbers within bounds", () => {
    const args = [-62, 42, 999];
    expect(subFunc(...args)).toBe(solution(...args));
});

test("Random tests", () => {
    const numberOfTests = 20;
    const getRand = (min, max) => Math.floor(Math.random() * max) + min;
    for (let i = 0; i < numberOfTests; i++) {
        const args = [getRand(-5, 270), getRand(-5, 270), getRand(-5, 270)];
        expect(subFunc(...args)).toBe(solution(...args));
    }
});
