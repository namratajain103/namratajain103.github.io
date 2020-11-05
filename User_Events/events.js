function webInfo() {
    var web_intro = document.getElementById("info");

    web_intro.classList.remove("d-none");
}

function getInfo() {
    var web_intro = document.getElementById("info");

    web_intro.classList.add("d-none");
}

function clickMe(e) {
    console.log(e.target);
}

function loadImg() {
    alert("image successfully loaded");
}