onmousedown = function() {
    let start = Date.now();

//запускаю метод объекта window setIntervsl который повторяет
// вызов функции-обработчик(handler) с периодичностью в 4 мс
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        man.style.left = timePassed / 5.5 + 'px';

        if (timePassed > 6000) clearInterval(timer);

    }, 0);
}
console.log("man=",man)