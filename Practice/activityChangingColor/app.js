document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("Color Was Updated");
    });
});
function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${blue},${green})`;
    return color;
}
//
// let btn = document.querySelector("button");
//
// btn.addEventListener("click", function () {
//     debugger;
//
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//
//     h3.innerText = randomColor;
//
//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
//
//     console.log("Color Was Updated");
// });
//
// function getRandomColor() {
//     debugger;
//
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//
//     return `rgb(${red}, ${green}, ${blue})`;
// }


