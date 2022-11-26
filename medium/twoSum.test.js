const subFunc = require("./twoSum").twoSum;
const { bonus } = require("./twoSum");
const solution = (nums, target) => {
    const dict = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (diff in dict && dict[diff] !== i) return true;
        else dict[nums[i]] = i;
    }
    return false;
};
const getRandInt = (min, max) => Math.floor(Math.random() * max) + min;

test("Should find this true", () => {
    const list = [1, 2, 3];
    const target = 5;

    expect(subFunc(list, target)).toBe(solution(list, target));
});

test("Should find this false", () => {
    const list = [1, 2, 3];
    const target = 6;

    expect(subFunc(list, target)).toBe(solution(list, target));
});

test("Should find this false also", () => {
    const list = [1, 2, 4];
    const target = 4;

    expect(subFunc(list, target)).toBe(solution(list, target));
});

test("randoms", () => {
    const amountOfCases = 20;

    for (let i = 0; i < amountOfCases; i++) {
        const randomList = [...Array(getRandInt(3, 40)).keys()].map((_) =>
            getRandInt(1, 50)
        );
        const randomTarget = getRandInt(20, 20000);
        expect(subFunc(randomList, randomTarget)).toBe(
            solution(randomList, randomTarget)
        );
    }
});

test("big random with bonus", () => {
    if (bonus([1, 2], 3) == null) return;

    const randomList = [...Array(9000000).keys()].map((_) =>
        getRandInt(1, 5000)
    );
    const randomTarget = getRandInt(20000000, 1000000000);

    // create our performace test
    const start = performance.now();
    const submittedResult = subFunc(randomList, randomTarget);
    const end = performance.now();

    expect(submittedResult).toBe(solution(randomList, randomTarget));

    expect(end - start < 5).toBe(true);
});
