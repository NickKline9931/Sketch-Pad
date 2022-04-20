let color = "black";
let click = true;
function populateBoard(size) {
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let amount = size * size;
    for(let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = "white";
        square.addEventListener('mouseover', colorSquare);
        board.insertAdjacentElement("beforeend", square);
        };
    }


populateBoard(30);

function changeSize(input) {
    if(input >=2 && input <=100 ){
   document.querySelector('.error').style.display = 'none';
    populateBoard(input);
} else {
    document.querySelector('.error').style.display = 'flex';
    console.log('2-100 only!')
}}

function colorSquare() {
    if (click) {
    this.style.backgroundColor = color;
}
}

function changeColor(choice) {
    color = choice;
}

function clearBoard(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = "white");
}

document.querySelector('body').addEventListener('click', (e) =>{
    if (e.target.tagName != 'BUTTON' && e.target.tagName != 'INPUT') {
    click = !click;
    if(click) {
        document.querySelector('.mode').textContent = "Pencil: On";
    } else {
        document.querySelector('.mode').textContent = "Pencil: Off";
    }
    }
});

