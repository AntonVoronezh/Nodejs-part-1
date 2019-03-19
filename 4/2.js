// Задача 2
// Дан массив с именами файлов. Переберите его циклом и создайте файлы с такими именами и пустым текстом.

const fs = require('fs');

const arr = ['1g', 'fghfghfh', '7', 'gxfgf', '55qx', 'cgg'];

for (let elem in arr) {
    fs.writeFile(`${elem}.txt`, 'data', err => {
        if (err) {
            throw err;
        }
        console.log(elem);
    });
}