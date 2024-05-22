const fs = require('fs');

// Читання файлу
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// Запис у файл
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Файл записано успішно.');
});


const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Сервер працює на http://127.0.0.1:3000/');
});


const path = require('path');

// З'єднання шляхів
const fullPath = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
console.log(fullPath); // /foo/bar/baz/asdf

// Отримання розширення файлу
const ext = path.extname('example.txt');
console.log(ext); // .txt


const os = require('os');

// Інформація про процесор
console.log(os.cpus());

// Вільна пам'ять
console.log(os.freemem());

// Загальна пам'ять
console.log(os.totalmem());



const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
    console.log('Подія "event" відбулася!');
});

myEmitter.emit('event');


const util = require('util');

const text = util.format('My %s %d %j', 'string', 123, { test: 'object' });
console.log(text); // My string 123 {"test":"object"}