const container = document.querySelector(".container");
const divGrid = document.createElement("div");

function addGrid(numTimes) {
    let i = 0;
    let gridNum = 0;
    let divGrid = "divGrid";
    let currentGrid = divGrid + gridNum;
    do {
        currentGrid = document.createElement("div");
        currentGrid.classList.add(divGrid);
        currentGrid.setAttribute("id",divGrid + gridNum);
        container.appendChild(currentGrid);
        i++
        gridNum ++;
    }
    while (i < numTimes);
}

function addColor() {
    this.classList.add("coloredDiv");
}

function resetGrid() {
    divs.forEach(divGrid => divGrid.classList.remove("coloredDiv"));
}

addGrid(16*16);
const divs = Array.from(document.querySelectorAll(".divGrid"));
divs.forEach(divGrid => divGrid.addEventListener("mouseover", addColor));
document.getElementById("reset").addEventListener("click", resetGrid);