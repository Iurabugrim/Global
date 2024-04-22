// Однорядковий коментар

/*
   Багаторядковий коментар
   Тут ми створюємо 10 змінних з різними типами даних
*/

// 1. Створення змінних з різними типами даних
let numberVar = 10;             // Ціле число
let stringVar = "Hello";        // Рядок
let booleanVar = true;          // Булеве значення
let arrayVar = [1, 2, 3];       // Масив
let objectVar = {               // Об'єкт
    name: "John",
    age: 30
};
let undefinedVar = undefined;   // Невизначено
let nullVar = null;             // Null
let functionVar = function() {  // Функція
    console.log("Function called");
};
let symbolVar = Symbol("id");   // Символ

// 2. Перевірка типів змінних
console.log(typeof numberVar);   // number
console.log(typeof stringVar);   // string
console.log(typeof booleanVar);  // boolean
console.log(typeof arrayVar);    // object (масив є об'єктом)
console.log(typeof objectVar);   // object
console.log(typeof undefinedVar);// undefined
console.log(typeof nullVar);     // object (особливість JavaScript)
console.log(typeof functionVar); // function
console.log(typeof symbolVar);   // symbol

// 3. Використання операторів присвоєння для простих математичних операцій
let x = 10;
let y = 5;

console.log(x + y);   // Додавання: 15
console.log(x - y);   // Віднімання: 5
console.log(x * y);   // Множення: 50
console.log(x / y);   // Ділення: 2
console.log(x % y);   // Остача від ділення: 0

// 4. Використання логічних операторів
let a = true;
let b = false;

console.log(a && b);  // Логічне "І" (AND): false
console.log(a || b);  // Логічне "АБО" (OR): true
console.log(!a);      // Логічне "НЕ" (NOT) для a: false
console.log(!b);      // Логічне "НЕ" (NOT) для b: true

// 5. Використання побітових операторів
let c = 5;  // 101
let d = 3;  // 011

console.log(c & d);   // Побітове "І" (AND): 1 (001)
console.log(c | d);   // Побітове "АБО" (OR): 7 (111)
console.log(c ^ d);   // Побітове "ВИКЛЮЧНО АБО" (XOR): 6 (110)
console.log(~c);      // Побітове "НЕ" (NOT) для c: -6 (-110)
console.log(c << 1);  // Зсув вліво на 1 позицію: 10 (1010)
console.log(c >> 1);  // Зсув вправо на 1 позицію: 2 (10)
