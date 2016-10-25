var readline = require('readline');
var fs = require('fs');
const imageToAscii = require("image-to-ascii");
var rl = readline.createInterface({
    input: process.stdin
    , output: process.stdout
});
var coin = [["1", "Орёл"], ["2", "Решка"]];
imageToAscii("http://multoigri.ru/images/game/9613.jpg", (err, converted) => {
    console.log(err || converted);
});

function start() {
    console.log('Испытайте свою удачу, поборитесь с Высшим разумом! Введите 1 (Орёл) или 2 (Решка) clear (Для очистки логов)');
}
start();
rl.on('line', function (cmd) {
    var rand = Math.floor(Math.random() * coin.length);
    if (cmd === 'clear') {
        fs.unlink('log.txt', function (err) {
            if (err) {
                console.log('Ещё не сыграно ни одной игры');
            }
            else {
                console.log('Файл успешно очищен');
            }
        });
    }
    if ((cmd === '1') || (cmd === '2')) {
        console.log('Вы выбрали "' + cmd + '", Высший разум выбрал "' + coin[rand][0] + '"');
        if (cmd === coin[rand][0]) {
            console.log('Поздравляю! Высший разум повержен!');
            str = "Win\n";
        }
        else {
            console.log('Печалька. Высший разум Вас поглотил ;(');
            str = "Loss\n";
        }
        fs.appendFile('log.txt', str, function (err) {
            if (err) {
                throw err;
            }
        });
    }
    else {
        console.log('Нарушение правил! Так Вам не победить Высший разум!');
    }
    start();
});