// Задача 1
// В переменной хранится текст. Запишите его в файл.

const fs = require('fs');

const data = 'dgdfhfghfghfghfghfghfghfgththt';

fs.writeFile('4/1.txt', data, err => {
    if(err) {
        throw err;
    }

    console.log('ok');
    
});
