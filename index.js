const userInput = Number(window.prompt("Please enter a number from 1 to 100"));
const container = document.querySelector(".container");

if (userInput > 100) {
    userInput = Number(window.prompt("Please enter a number below 100"));
}

function addGrid(numTimes) {
    let gridNum = 1;
    let divGrid = "divGrid";
    let currentGrid = divGrid + gridNum;
    for (let j=0; j < numTimes; j++) {
        let divRow = document.createElement("div");
        divRow.classList.add("divRow");
        container.appendChild(divRow);
        for (let i=0 ;i< numTimes; i++) {
          currentGrid = document.createElement("div");
          currentGrid.classList.add(divGrid);
          currentGrid.setAttribute("id",divGrid + gridNum);
          divRow.appendChild(currentGrid);
          gridNum ++;
        }
    }
}

function addColor() {
    this.classList.add("coloredDiv");
}

function resetGrid() {
    divs.forEach(divGrid => divGrid.classList.remove("coloredDiv"));
}

addGrid(userInput);

// document.getElementById("newGrid").addEventListener("click", userInput);

const divs = Array.from(document.querySelectorAll(".divGrid"));
divs.forEach(divGrid => divGrid.addEventListener("mouseover", addColor));

document.getElementById("reset").addEventListener("click", resetGrid);