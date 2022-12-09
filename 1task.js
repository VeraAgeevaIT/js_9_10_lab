console.log("js подключен")
let toggleOfClick = false;
console.log(toggleOfClick)
function moving() {
    let clickedElement= event.target;
    console.log(clickedElement)
    onmousemove = function() {
        if (toggleOfClick) {
            clickedElement.style.top = event.clientY - (clickedElement.style.height / 2) + "px";
            clickedElement.style.left = event.clientX - (clickedElement.style.width / 2) + "px";
        }
    }

}
onclick = function(){
    console.log("вы кликнули по элементу");
    toggleOfClick = !toggleOfClick;
    console.log(toggleOfClick)
}