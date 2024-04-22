const numbers = [1, 2, 3, 4, 5];
const strings = ["hello", "world", "javascript", "programming"];
const booleans = [true, false, true, false, true];
const mixed = [1, "two", false, { key: "value" }];
const objects = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let index = 0;
while (index < strings.length) {
    console.log(strings[index]);
    index++;
}

let counter = 0;
do {
    console.log(booleans[counter]);
    counter++;
} while (counter < booleans.length);

function sum(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}

function getSentence(words) {
    return words.join(" ") + ".";
}

function sumNumArrays(arr1, arr2) {
    return sum(arr1) + sum(arr2);
}

function welcomeUsers(users) {
    return users.map(user => `Welcome, ${user.name}!`);
}

const totalSum = sum(numbers);
const sentence = getSentence(strings);
const totalArraysSum = sumNumArrays([1, 2, 3], [4, 5, 6]);
const greetings = welcomeUsers(objects);

console.log(totalSum);
console.log(sentence);
console.log(totalArraysSum);
console.log(greetings);
