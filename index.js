const userInput = Number(window.prompt("Please enter a number from 1 to 100"));
const container = document.querySelector(".container");

if (userInput > 100) {
    userInput = Number(window.prompt("Please enter a number below 100"));
}

function addGrid(numTimes) {
    let gridNum = 1;
    let divRowNum = 1;
    let currentGrid = "divGrid" + gridNum;
    for (let j=0; j < numTimes; j++) {
        let divRow = document.createElement("div");
        divRow.classList.add("divRow");
        divRow.setAttribute("id", "divRow" + divRowNum);
        container.appendChild(divRow);
        divRowNum ++;
        for (let i=0 ;i< numTimes; i++) {
          currentGrid = document.createElement("div");
          currentGrid.classList.add("divGrid");
          currentGrid.setAttribute("id", "divGrid" + gridNum);
          divRow.appendChild(currentGrid);
          gridNum ++;
        }
    }
    let divs = Array.from(document.querySelectorAll(".divGrid"));
    divs.forEach(divGrid => divGrid.addEventListener("mouseover", addColor));
}

function addColor() {
    this.classList.add("coloredDiv");
}

function resetGrid() {
    let divs = Array.from(document.querySelectorAll(".divGrid"));
    divs.forEach(divGrid => divGrid.classList.remove("coloredDiv"));
}

function newGrid() {
    let divRemove = Array.from(document.querySelectorAll(".divRow"));
    divRemove.forEach(divRemove => divRemove.classList.remove("divRow"));
    let userInput = Number(window.prompt("Please enter a number from 1 to 100"));
    if (userInput > 100) {
        userInput = Number(window.prompt("Please enter a number below 100"));
    }
    addGrid(userInput);
    let divs = Array.from(document.querySelectorAll(".divGrid"));
    divs.forEach(divGrid => divGrid.addEventListener("mouseover", addColor));
}

addGrid(userInput);

document.getElementById("newGrid").addEventListener("click", newGrid);
document.getElementById("reset").addEventListener("click", resetGrid);