//create 16x16 divs grid through javascript in one main container div
// -- use css grid for the above step ^. Will make it easier to modify the scale of the grid in the future.
//on hover change the color of a div
// -- add a style element that changes the background fill to black.
// clear button that resets all squares to white background color.

const mainContainer = document.querySelector('#main-container');

//buttons
const clearBtn = document.querySelector('#clear-btn')
//const gridSizeInput = document.querySelector('#gird-size-input')

//console.log(gridSizeInput.innerHTML);

// variable that stores a size e.x 16
// a grid that multiplys 16x16 to generate a grid size
// while i <= 256 --> create a div and add it to mainContaner

let gridSize = 16;
let chosenColor = 'lightblue';

mainContainer.style.display = 'grid';
mainContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
mainContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

//Mouse down var that becomes true on mouseDown. This allows the user
//to only change the color of a div when mouseDown is true when paired
//with mouseover in the the for loop below.
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = chosenColor;
}

//for loop to fill the mainContainer with divs based on gridSize input(16 default).
for (i=0; i < (gridSize**2); i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square-div');
    gridSquare.addEventListener('mouseover', changeColor);
    gridSquare.addEventListener('mousedown', changeColor);
    mainContainer.appendChild(gridSquare);
}

const gridDivArray = Array.from(document.querySelectorAll('.grid-square-div'));

// for each square in the gridDivArray change the backgroundColor to white.
clearBtn.addEventListener('click', function() {
    for (i = 0; i < (gridDivArray.length); i++) {
        gridDivArray[i].style.backgroundColor = 'white';
    }
});



