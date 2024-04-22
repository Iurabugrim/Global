const numbers = [1, 2, 3, 4, 5];
const strings = ["a", "b", "c", "d", "e"];
const booleans = [true, false, true, false, true];
const objects = [{ id: 1 }, { id: 2 }, { id: 3 }];
const mixed = [1, "a", true, { id: 4 }, null];

numbers.push(6);
numbers.pop();

strings.unshift("z");
strings.shift();

const combined = numbers.concat(strings);

function swapDestructure(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function swapTraditional(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function squareNumbers(arr) {
    return arr.map(num => num * num);
}

function toStringArray(arr) {
    return arr.map(element => String(element));
}

function removeBooleans(arr) {
    return arr.filter(element => typeof element !== 'boolean');
}

swapDestructure(numbers, 0, 4);
swapTraditional(strings, 1, 3);

const squared = squareNumbers(numbers);
const stringified = toStringArray(mixed);
const noBooleans = removeBooleans(mixed);
