// Зада[ча :4
// Дан файл, текстом которого является строка из чисел, разделенных запятыми. 
// Прочитайте этот файл, вычислите среднее арифметическое этих чисел и запишите результат в новый файл.

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