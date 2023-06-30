"use strict";

let strings = ['ab', 'ab', 'abc']
let queries = ['ab', 'abc', 'bc']

function matchingStrings(strings, queries) {
    // Write your code here
    let results = [];
    queries.forEach((query) => {
        results.push(strings.filter((string) => string === query).length);
    })
    console.log(results);
};

matchingStrings(strings, queries)