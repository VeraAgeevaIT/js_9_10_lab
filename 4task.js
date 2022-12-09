const fieldset = document.querySelector('.fieldset');
const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const overlay = document.querySelector('.overlay')
const select = document.querySelector('.selectColor')

const snd1 = new Audio("sounds/Sound_1.mp3");
const snd2 = new Audio("sounds/Sound_2.mp3");
const snd3 = new Audio("sounds/Sound_3.mp3");
const snd4 = new Audio("sounds/Sound4.mp3");

button1.disabled = true;

fieldset.addEventListener("click", () => {
    console.log('fieldset clicked');
    button1.disabled = false;
})

select.addEventListener("click", () => {
    snd3.play();
})

function again() {
    console.log('again clicked')
    document.location.reload();

}

function draw() {
    console.log('pressed Submit')
    button1.disabled = true;
    snd1.play();


    event.preventDefault()

    if (document.getElementById("canvas"))
        document.getElementById("canvas").remove();
    if (document.getElementById("divY"))
        document.getElementById("divY").remove();
    if (document.getElementById("divX"))
        document.getElementById("divX").remove();

    let canvas = document.createElement("canvas"),
        paint = event.target.paint.value,
        color = document.getElementById("select").value,
        y,
        ctx = canvas.getContext('2d'),
        divX = document.body.appendChild(document.createElement("div")),
        divY = document.body.appendChild(document.createElement("div"));

    canvas.width = 1400;
    canvas.height = 700;
    canvas.style.position = "absolute";
    canvas.style.top = "70px";
    canvas.id = "canvas";

    divY.innerHTML = "Y";
    divY.id = "divY";
    divX.innerHTML = "X";
    divX.id = "divX";
    divX.style = "position: absolute; font-size: 15px;";
    divY.style = "position: absolute; font-size: 15px;";
    divY.style.top = 70 + "px";
    divY.style.left = canvas.width / 2 + 20 + "px";
    divX.style.top = canvas.height / 2 + 40 + "px";
    divX.style.left = canvas.width - 10 + "px";


    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.moveTo(canvas.width / 2 - 0.5, 0);
    ctx.lineTo(canvas.width / 2 - 0.5, canvas.height);
    ctx.moveTo(0, canvas.height / 2 - 0.5);
    ctx.lineTo(canvas.width, canvas.height / 2 - 0.5);

    ctx.moveTo(canvas.width / 2 - 0.5, 0);
    ctx.lineTo(canvas.width / 2 - 5.5, 10.5);
    ctx.moveTo(canvas.width / 2 - 0.5, 0);
    ctx.lineTo(canvas.width / 2 + 5.5, 10.5);

    ctx.moveTo(canvas.width, canvas.height / 2 - 0.5);
    ctx.lineTo(canvas.width - 10.5, canvas.height / 2 - 5.5);
    ctx.moveTo(canvas.width, canvas.height / 2 - 0.5);
    ctx.lineTo(canvas.width - 10.5, canvas.height / 2 + 5.5);

    ctx.stroke();

    ctx.fillStyle = color;

    if (paint == 1) {//y = x^2
        for (let x = -canvas.width / 2; x < canvas.width / 2; x += 0.001) {
            y = canvas.height / 2 - 40 * Math.pow(x / 40, 2);
            ctx.fillRect(x + canvas.width / 2 - 0.5, y - 0.5, 5, 5);
        }
    }

    if (paint == 2) {//y = x^3
        for (let x = -canvas.width / 2; x < canvas.width / 2; x += 0.01) {
            y = (canvas.height / 2 - 40 * Math.pow(x / 40, 3));
            ctx.fillRect(x + canvas.width / 2 - 0.5, y - 0.5, 5, 5);
        }
    }

    if (paint == 3) {//y = sin(x)
        for (let x = -canvas.width / 2; x < canvas.width / 2; x += 0.01) {
            y = (canvas.height / 2 - 40 * Math.sin(x / 40));
            ctx.fillRect(x + canvas.width / 2 - 0.5, y - 0.5, 5, 5);
        }
    }

    if (paint == 4) {//y = cos(x)
        for (let x = -canvas.width / 2; x < canvas.width / 2; x += 0.01) {
            y = canvas.height / 2 - 40 * Math.cos(x / 40);
            ctx.fillRect(x + canvas.width / 2 - 0.5, y - 0.5, 5, 5);
        }
    }
    if (paint == 5) {//y = x^2
        for (let x = -canvas.width / 2; x < canvas.width / 2; x += 0.001) {
            y = canvas.height / 2 - 40 * Math.log(x / 40, 2);
            ctx.fillRect(x + canvas.width / 2 - 0.5, y - 0.5, 5, 5);
        }
    }


    if (!paint) {
        alert('выбирете вариант графика');
        document.location.reload();

    }

    document.body.appendChild(canvas);

    setTimeout(()=>{
        button2.style.visibility = 'visible';
        overlay.style.visibility = 'visible'
        button2.disabled = false;
        snd2.play();
    }, 2000)

}

function changeColor(colorParam) {
    let color = colorParam.value.toLowerCase();
    let optionElement = document.getElementById('select');
    let optionElement2 = document.getElementById('select2');
    snd3.play();
    optionElement.style.background = color;
};

function voice1() {
    snd1.play();
}

function voice2() {
    snd2.play();
}

let promise = snd4.play();

try {
    if (promise !== undefined) {
        promise.then(_ => {
            snd4.play();
        }).catch(error => {
            // Autoplay was prevented.
            // Show a "Play" button so that user can start playback.
        });
    }
}
catch (e){
    console.log(e)
}
