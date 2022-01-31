const box1 = document.querySelector("#col1");
const box2 = document.querySelector("#col2");
const box3 = document.querySelector("#col3");
const setBg1 = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    box1.style.background = "#" + randomColor;
    col1.innerHTML = "#" + randomColor;
}

const setBg2 = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    box2.style.background = "#" + randomColor;
    col2.innerHTML = "#" + randomColor;
}

const setBg3 = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    box3.style.background = "#" + randomColor;
    col3.innerHTML = "#" + randomColor;
}
btncolor.addEventListener("click", () => {
    setBg1();
    setBg2();
    setBg3();
})

function copyToClipBoard() {

    var content = document.getElementByClassName('colobox');
    
    content.select();
    document.execCommand('copy');

    alert("Copied!");
}
