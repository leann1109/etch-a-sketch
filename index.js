const container = document.querySelector(".container");
const divGrid = document.createElement("div");
divGrid.classList.add("divGrid");


let i = 0;
function addGrid(numTimes) {
    do {
        container.appendChild(divGrid.cloneNode(true));
        i++
    }
    while (i < numTimes);
}

console.log(addGrid(16*16));