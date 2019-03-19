// Задача :2
// Дан файл с текстом. Запишите ему в конец еще какой-нибудь текст.

const fs = require('fs');

fs.readFile('5/1.txt', 'utf8', (err, data) => {
    if(err) {
        throw err;
    }

    const res = data + '!';

    fs.writeFile(`5/1.txt`, res, err => {
        if (err) {
            throw err;
        }
        console.log('ok');
    });
    
});