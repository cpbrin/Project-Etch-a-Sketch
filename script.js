

function createGrid(){
    const gridContainer = document.querySelector('.grid-container');
    for(i=1; i <= 256; i++ ) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('grid-box');
        gridContainer.appendChild(gridBox);
    }
}
createGrid();


let gridBoxes = document.querySelectorAll('.grid-box')
gridBoxes.forEach(gridBox => {
    gridBox.addEventListener('mouseover', function () {
        gridBox.style.backgroundColor = 'black';
    })
})


