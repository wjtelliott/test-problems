const subFunc = require("./palindrome");
const solution = (str) => {
    for (let start = 0, end = str.length; start < end; start++, end--)
        if (str[start].toLowerCase() !== str[end].toLowerCase()) return false;
    return true;
};

test("non-random results", () => {
    const cases = [
        "puuup",
        "opoos",
        "asdf",
        "tooot",
        "hijjnjjih",
        "lokkdaadkkol",
        "asdfggg",
        "word",
    ];

    cases.forEach((test) => {
        expect(subFunc(test)).toBe(solution(test));
    });
});
