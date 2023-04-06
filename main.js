let btn = document.querySelector('button');

btn.addEventListener("click", () => {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.background = bgColor;

    let a = document.getElementById("form1");

    let b = document.getElementsByTagName("H2");
    console.log(a);
    console.log(b);

    let elem = [];
    let i;
    for (i = 0; i < b.length; i++) {
        elem.push(document.createElement("H3"));
        elem[i].innerHTML = a.elements[i].value;
        document.body.appendChild(elem[i]);
    }
})

removeText.onclick = function () {
    removeText.remove();
}