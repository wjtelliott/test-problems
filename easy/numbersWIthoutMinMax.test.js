const subFunc = require("./numbersWithoutMinMax");
const solution = (arr) => {
    if (!arr) return 0;

    let high = Math.max(...arr);
    let min = Math.min(...arr);

    return arr.reduce((prev, curr) => {
        if (curr === high) {
            high = NaN;
            return prev;
        } else if (curr === min) {
            min = NaN;
            return prev;
        } else return prev + curr;
    }, 0);
};
const getRandInt = (min, max) => Math.floor(Math.random() * max) + min;

test("Expected nums", () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 44;

    expect(subFunc(list)).toBe(target);
});

test("random nums", () => {
    const testCases = 10;

    for (let i = 0; i < testCases; i++) {
        const list = [...Array(getRandInt(5, 25)).keys()].map((_) =>
            getRandInt(1, 50)
        );
        const target = solution(list);

        expect(subFunc(list)).toBe(target);
    }
});
