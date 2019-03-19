// Задача 1:
// Даны два файла. Прочитайте текст из первого файла и запишите его во второй.

const fs = require('fs');

fs.readFile('5/1.txt', 'utf8', (err, data) => {
    if(err) {
        throw err;
    }

    fs.writeFile(`5/11.txt`, data, err => {
        if (err) {
            throw err;
        }
        console.log('ok');
    });
    
});
