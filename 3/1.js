// Задача1
// Дан файл с текстом. Откройте его асинхронно, прочитайте текст и выведите его в консоль.

const fs = require('fs');

fs.readFile('3/1.txt', 'utf8', (err, data) => {
    if(err) {
        throw err;
    }

    console.log(data);
    
});

console.log('!!!')