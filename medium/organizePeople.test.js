const { formatEntries, sortEntries } = require("./organizePeople");
const formatSolution = (strNames) => {
    const dict = {};
    const result = [];
    strNames.split("\n").forEach((el) => (dict[el] = 0));
    for (const name in dict) result.push(name);
    return result;
};
const sortSolution = (list) =>
    list.sort((a, b) => {
        const aNum = a.match(/\d+/);
        const bNum = b.match(/\d+/);
        return bNum - aNum;
    });

test("Finds solution for formatting", () => {
    const givenString =
        "Ted: 12\nJohn: 40\nTed: 12\nJohn: 20\nBarney: 66\nJenna: 90\nMelissa: 5";
    const answerList = [
        "Ted: 12",
        "John: 40",
        "John: 20",
        "Barney: 66",
        "Jenna: 90",
        "Melissa: 5",
    ];
    expect(formatEntries(givenString)).toBe(answerList);
});

test("Finds solution for sorting", () => {
    const givenList = [
        "Ted: 12",
        "John: 40",
        "John: 20",
        "Barney: 66",
        "Jenna: 90",
        "Melissa: 5",
    ];
    const answerList = [
        "Jenna: 90",
        "Barney: 66",
        "John: 40",
        "John: 20",
        "Ted: 12",
        "Melissa: 5",
    ];
    expect(sortEntries(givenList)).toBe(answerList);
});

test("Randoms", () => {});
