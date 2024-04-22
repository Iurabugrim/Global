const greeting = "Hello";
const name = "World";
const question = "How are you?";
const statement = "JavaScript is fun!";
const whitespace = "   Trim me!   ";

const combined = `${greeting}, ${name}! ${question}`;
const concatWithFunction = [].concat(greeting, ", ", name, "! ", question).join('');
const concatWithArray = [greeting, ", ", name, "! ", question].join('');

const lowerCaseStatement = statement.toLowerCase();
const upperCaseGreeting = greeting.toUpperCase();

const replacedStatement = statement.replace("fun", "awesome");
const trimmedWhitespace = whitespace.trim();
const matchedWords = statement.match(/\b(\w+)\b/g);

const sortedNames = [name, greeting, question, statement, whitespace].sort((a, b) => a.localeCompare(b));

const includesWorld = statement.includes("World");

function welcomeUsers(users) {
    return users.map(user => `Welcome, ${user.name}!`);
}

function isPalindrome(word) {
    const cleanWord = word.replace(/\W/g, '').toLowerCase();
    return cleanWord === cleanWord.split('').reverse().join('');
}

const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
const greetings = welcomeUsers(users);
console.log(greetings);

const word = "Madam";
const palindromeCheck = isPalindrome(word);
console.log(`${word} is a palindrome: ${palindromeCheck}`);
