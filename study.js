
// Original JavaScript code by Chirp Internet: chirpinternet.eu
// Please acknowledge use of this code by including this header.

(function() {

    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    var field = document.getElementById("field");
    var ball = document.getElementById("ball");

    var maxX = field.clientWidth - ball.offsetWidth;
    var maxY = field.clientHeight - ball.offsetHeight;

    var duration = 4; // seconds
    var gridSize = 100; // pixels

    var start = null;
    var stretchFactor;

    function step(timestamp)
    {
        var progress, x, y;
        if(start === null) {
            start = timestamp;
            stretchFactor = 1 + (Math.random() * 3);
        }

        progress = (timestamp - start) / duration / 1000; // percent

        x = stretchFactor * Math.sin(progress * 2 * Math.PI); // x = ƒ(t)
        y = Math.cos(progress * 2 * Math.PI); // y = ƒ(t)

        ball.style.left = maxX/2 + (gridSize * x) + "px";
        ball.style.bottom = maxY/2 + (gridSize * y) + "px";

        if(progress >= 1) start = null; // reset to start position
        requestAnimationFrame(step);
    }

    requestAnimationFrame(step);

})();
