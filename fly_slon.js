

(function () {

    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    let pole = document.getElementById("pole");
    let slonik = document.getElementById("slonik");

    let maxX = pole.clientWidth - slonik.offsetWidth;
    let maxY = pole.clientHeight - slonik.offsetHeight;

    let duration = 25; // seconds
    let gridSize = 100; // pixels

    let start = null;
    let stretchFactor;

    function step(timestamp) {
        let progress, x, y;
        if (start === null) {
            start = timestamp;
            stretchFactor = 1 + (Math.random() * 3);
        }

        progress = (timestamp - start) / duration / 100; // percent

        x = stretchFactor * Math.sin(progress * 2 * Math.PI); // x = ƒ(t)
        y = Math.cos(progress * 2 * Math.PI); // y = ƒ(t)

        slonik.style.left = maxX / 2 + (gridSize * x) + "px";
        slonik.style.bottom = maxY / 2 + (gridSize * y) + "px";

        if (progress >= 1) start = null; // reset to start position
        requestAnimationFrame(step);
    }

    requestAnimationFrame(step);

})();
