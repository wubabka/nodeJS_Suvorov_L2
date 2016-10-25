var fs = require('fs');

fs.readFile('log.txt', 'utf8', function (err, data) {
    if (err) {
        console.log('Ещё не сыграно ни одной игры');
        return;
    }
    var arr = data.split('\n');
    var parties = arr.length - 1;

    var win = 0, loss = 0, maxWin = 0, maxLoss = 0, i = 0, j = 0;

    for (var key in arr) {
        if (arr[key] === 'Win') {
            win++;
            i++;
        } else {
            if (i >= maxWin) {
                maxWin = i;
                i = 0;
            }
            i = 0;
        }
        if (arr[key] === 'Loss') {
            loss++;
            j++;
        } else {
            if (j >= maxLoss) {
                maxLoss = j;
                j = 0;
            }
            j = 0;
        }
    }

    console.log('Всего сражений ' + parties);
    console.log('Поверженых монстров ' + win);
    console.log('Съедено Вас ' + loss);
    console.log('Соотношение партий: ' + win + ':' + loss);
    console.log('Соотношение побед к поражению: ' + win / + loss);
    console.log("Максимальне число побед подряд = " + maxWin);
    console.log("Максимальне число проигрышей подряд = " + maxLoss);
});