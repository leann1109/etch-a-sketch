const container = document.querySelector(".container");
const divGrid = document.createElement("div");

function addGrid(numTimes) {
    let i = 0;
    let gridNum = 0;
    let divGrid = "divGrid";
    let currentGrid = divGrid + gridNum;
    do {
        currentGrid = document.createElement("div");
        currentGrid.classList.add(divGrid + gridNum);
        currentGrid.setAttribute("id",divGrid + gridNum);
        container.appendChild(currentGrid);
        i++
        gridNum ++;
    }
    while (i < numTimes);
}

function colorGrid() {
    document.getElementById("divGrid").style.backgroundColor = "red";
}

addGrid(16*16);
// const divs = Array.from(document.querySelectorAll(".divGrid"));
// window.addEventListener("mouseover", colorGrid);