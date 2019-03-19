// Задача :3
// Дан файл, текстом которого является число. Прочитайте этот файл,
//  вычислите квадрат этого числа и запишите этот квадрат обратно в файл.

const fs = require('fs');

fs.readFile('5/1.txt', 'utf8', (err, data) => {
    if(err) {
        throw err;
    }

    const res = data * data;

    fs.writeFile(`5/1.txt`, res, err => {
        if (err) {
            throw err;
        }
        console.log('ok');
    });
    
});