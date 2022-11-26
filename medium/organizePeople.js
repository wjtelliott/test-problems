const peopleString =
    "Ted: 12\nJohn: 40\nTed: 12\nJohn: 20\nBarney: 66\nJenna: 90\nMelissa: 5";

// Create a function that organizes these into an array, excluding '\n's
// Remove all duplicates from that array
// Expected output: ['Ted: 12', 'John: 40', 'John: 20', 'Barney: 66', 'Jenna: 90', 'Melissa: 5']

function formatEntries(entriesString) {
    /* Solution here */

    return null;
}

//console.log("Format Entries:", formatEntries(peopleString));

// Using the above solution, sort each person by their value associated with them
// Expected output: ['Jenna: 90', 'Barney: 66', 'John: 40', 'John: 20', 'Ted: 12', 'Melissa: 5']

function sortEntries(entriesArray) {
    /* Solution here */

    return null;
}

//console.log("Sort Entries:", sortEntries(formatEntries(peopleString)));

// you can use the below function to check your answer
// const check = () => {
//     const formatSolutionOutput = [
//         "Ted: 12",
//         "John: 40",
//         "John: 20",
//         "Barney: 66",
//         "Jenna: 90",
//         "Melissa: 5",
//     ];
//     const sortSolutionOutput = [
//         "Jenna: 90",
//         "Barney: 66",
//         "John: 40",
//         "John: 20",
//         "Ted: 12",
//         "Melissa: 5",
//     ];

//     let pass = true;

//     const formatResult = formatEntries(peopleString);
//     const sortResult = sortEntries(formatSolutionOutput);
//     if (formatResult.length !== formatSolutionOutput.length ||
//         sortResult.length !== sortSolutionOutput.length) pass = false;
//     for (let i = 0; i < formatResult.length && pass; i++) {
//         if (
//             formatResult[i] !== formatSolutionOutput[i] ||
//             sortResult[i] !== sortSolutionOutput[i]
//         )
//             pass = false;
//     }

//     console.log("--------------");
//     console.log(["Solutions all worked! :)", "Something went wrong :("][+!pass]);
// };
// check();

module.exports = { formatEntries, sortEntries };
