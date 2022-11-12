const subFunc = require("./countSheep");
const solution = (num) => {
    let result = "";
    for (let i = 0; i < num; i++, result += `${i} sheep...`);
    return result;
};
const getRandInt = (min, max) => Math.floor(Math.random() * max) + min;

test("Will count to 3 sheep", () => {
    expect(subFunc(3)).toBe(solution(3));
});

test("Will count random sheep", () => {
    const randomTestAmount = 20;

    for (let i = 0; i <= randomTestAmount; i++) {
        const randomSheep = getRandInt(1, 400);
        expect(subFunc(randomSheep)).toBe(solution(randomSheep));
    }
});
