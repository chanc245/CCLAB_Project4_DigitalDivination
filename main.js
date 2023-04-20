var circle = document.getElementById("circle");

document.addEventListener("mousemove", function (event) {
    var x = event.clientX;
    var y = event.clientY;
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    circle.textContent = "x: " + (x - 20) + ", y: " + (y - 20);
});

