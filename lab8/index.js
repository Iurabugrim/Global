const numbers = [5, 3, 10, 2, 8];
const strings = ["apple", "banana", "cherry", "date", "elderberry"];
const booleans = [true, false, false, true, true];
const objects = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Charlie" }];
const mixed = [42, "hello", false, { key: "value" }, 3.14];

numbers.forEach((number, index) => {
    console.log(`Number at index ${index}: ${number}`);
});

const uppercaseStrings = strings.map(string => string.toUpperCase());
console.log(uppercaseStrings);

const truthyValues = booleans.filter(Boolean);
console.log(truthyValues);

const totalSum = numbers.reduce((sum, current) => sum + current, 0);
console.log(totalSum);

const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log(sortedNumbers);

const hasCherry = strings.includes("cherry");
console.log(hasCherry);

const stringConcat = strings.join(", ");
console.log(stringConcat);

function sum(arr) {
    return arr.map(Number).reduce((sum, current) => sum + current, 0);
}

function getSentence(words) {
    return words.reduce((sentence, word) => sentence + word + " ", "").trim() + ".";
}

function sumNumArrays(arr1, arr2) {
    const total1 = sum(arr1);
    const total2 = sum(arr2);
    return total1 + total2;
}

function welcomeUsers(users) {
    return users.map(user => `Welcome, ${user.name}!`);
}

const numbersSum = sum(numbers);
console.log(numbersSum);

const sentence = getSentence(strings);
console.log(sentence);

const arraysSum = sumNumArrays([1, 2, 3], [4, 5, 6]);
console.log(arraysSum);

const greetings = welcomeUsers(objects);
console.log(greetings);
