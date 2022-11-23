const subFunc = require("./theSame");
const solution = (numArray, squaredArray) => {
    if (!numArray || !squaredArray) return false;
    if (numArray.length !== squaredArray.length) return false;

    const dict = {};
    squaredArray.forEach((num) => {
        if (!(num in dict)) dict[num] = 1;
        else dict[num]++;
    });

    for (let i = 0; i < numArray.length; i++) {
        const squared = numArray[i] ** 2;
        if (!(squared in dict) || dict[squared] < 1) return false;
        dict[squared]--;
    }

    return true;
};

const getRandInt = (min, max) => Math.floor(Math.random() * max) + min;

test("Should find this true", () => {
    const list = [121, 144, 19, 161, 19, 144, 19, 11];
    const target = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

    expect(subFunc(list, target)).toBe(solution(list, target));
});

test("Should find this false", () => {
    const list = [121, 144, 19, 161, 19, 144, 19, 11];
    const target = [132, 14641, 20736, 361, 25921, 361, 20736, 361];

    expect(subFunc(list, target)).toBe(solution(list, target));
});

test("Should find this false also", () => {
    const list = [121, 144, 19, 161, 19, 144, 19, 11];
    const target = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];

    expect(subFunc(list, target)).toBe(solution(list, target));
});

test("randoms", () => {
    const amountOfCases = 20;

    for (let i = 0; i < amountOfCases; i++) {
        const randomList = [...Array(getRandInt(3, 40)).keys()].map((_) =>
            getRandInt(1, 50)
        );
        const target = randomList
            .map((num) => num ** 2)
            .sort(() => getRandInt(-2, 2));
        expect(subFunc(randomList, target)).toBe(solution(randomList, target));
    }
});

test("big random with bonus", () => {
    const randomList = [...Array(9000000).keys()].map((_) =>
        getRandInt(1, 5000)
    );
    const randomTarget = randomList
        .map((num) => num ** 2)
        .sort(() => getRandInt(-2, 2));

    // create our performace test
    const start = performance.now();
    const submittedResult = subFunc(randomList, randomTarget);
    const end = performance.now();

    expect(submittedResult).toBe(solution(randomList, randomTarget));

    expect(end - start < 5).toBe(true);
});
