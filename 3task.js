console.log(window.innerHeight)
let canvas, ctx, ctxW = 1400, ctxH = 780;
let lines = [];
let pressed = false;
let ball = {
    x: -100,
    y: 0,
    radius: 20,
    speed: 6,
    color: "#f5ddf3",
    moveTo: 0,//Индекс точек массива к которому двигаться
    draw: function () {//метод объекта ball
        if (pressed)
            return;//если булева переменна pressed равна true то return делает завершение функции draw
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    },
    handler: function () {
        if (lines.length < 10|| pressed)//проверяем длину линии, если она меньше 10 пикселей , или нажата кнопка pressed
                                        // то происходит return, то есть функция прекращается
            return;
        if (this.moveTo >= lines.length)//если свойство moveto  этой функции больше чем длина линии
           this.moveTo = 0;//то круг возращается в начало линии

        if (this.moveTo == 0) {
            this.x = lines[0].x;
            this.y = lines[0].y;
            this.moveTo++;
        } else {
            let angle = Math.atan2(lines[this.moveTo].x - this.x, lines[this.moveTo].y - this.y);
            //Вернет угол в радианах между координатами центра круга и следующей точкой на линии
            if (Math.abs(this.x - lines[this.moveTo].x) < this.speed && Math.abs(this.y - lines[this.moveTo].y) < this.speed) {
                this.x = lines[this.moveTo].x;
                this.y = lines[this.moveTo].y;
                this.moveTo++;
            } else {
                this.x += Math.sin(angle) * this.speed;
                this.y += Math.cos(angle) * this.speed;
            }
        }
    }
};
window.addEventListener("load", function () {


    canvas = document.getElementById("myCanvas");
    canvas.width = ctxW;
    canvas.height = ctxH;
    ctx = canvas.getContext("2d");
    canvas.addEventListener("mousedown", EVM_down);
    canvas.addEventListener("mouseup", EVM_up);
    canvas.addEventListener("mousemove", EVM_move);
    handler();
}, false);

function EVM_down(e) {
    lines = [];
    ball.moveTo = 0;
    let x = e.clientX - canvas.offsetLeft;//определяем кооридинты по оси Ох того места где нажата мышка
    let y = e.clientY - canvas.offsetTop;//определяем кооридинты по оси Оу того места где нажата мышка
    lines.push({x: x, y: y});
    pressed = true;
}

function EVM_move(e) {
    if (!pressed)
        return;
    let x = e.clientX - canvas.offsetLeft;
    let y = e.clientY - canvas.offsetTop;
    lines.push({x: x, y: y});
}

function EVM_up(e) {
    if (!pressed)
        return;
    let x = e.clientX - canvas.offsetLeft;
    let y = e.clientY - canvas.offsetTop;
    lines.push({x: x, y: y});
    pressed = false;
}

function handler() {
    ctx.fillStyle = "#de972d";
    ctx.fillRect(0, 0, ctxW, ctxH);
    if (lines.length > 1) {
        ctx.strokeStyle = "#2e38ee";
        ctx.beginPath();
        ctx.moveTo(lines[0].x, lines[0].y);
        for (let i = 1; i < lines.length; i++)
            ctx.lineTo(lines[i].x, lines[i].y);
        ctx.stroke();
        ctx.closePath();
    }
    ball.draw();
    ball.handler();
    setTimeout(handler, 1000 / 60);
}