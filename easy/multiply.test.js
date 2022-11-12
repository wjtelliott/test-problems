const submittedFunction = require("./multiply");

const solution = (num1, num2) => num1 * num2;
const getRandInt = (min, max) => Math.floor(Math.random() * max) + min;

test("Will multiply numbers 1 & 2", () => {
    expect(submittedFunction(1, 2)).toBe(solution(1, 2));
});

test("Will do random numbers", () => {
    const randomTestAmount = 20;

    for (let i = 0; i <= randomTestAmount; i++) {
        const randomNum1 = getRandInt(0, 400);
        const randomNum2 = getRandInt(0, 400);

        expect(submittedFunction(randomNum1, randomNum2)).toBe(
            solution(randomNum1, randomNum2)
        );
    }
});
