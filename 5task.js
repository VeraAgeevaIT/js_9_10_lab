function onmouse(event) {
    var target = event.target;
    if (target.className == 'menu-item') {
        console.log(event.target);
        var s = target.getElementsByClassName('submenu');
        console.log(s);
        closeMenu();

        s[0].style.height = '30px';
        s[0].style.visibility = "visible";
        s[0].style.fontSize = "20";

    }
}

document.onmouseover = function (event) {
    var target = event.target;
    console.log(event.target);
    if (target.className != 'menu-item' &&
        target.className != 'submenu') {
        closeMenu();
    }
}
function closeMenu() {
    var menu = document.getElementById('nav');
    var subm = document.getElementsByClassName('submenu');
    for (var i = 0; i < 3; i++) {
        subm[i].style.height = "0px";
        subm[i].style.visibility = "hidden";
        subm[i].style.fontSize = "20";
    }
}