let color = "black";
let click = true;
function changeColor(choice) {
    color = choice;
    if (color == "black") {
        document.querySelector('#black').style.borderColor = "gold";
    } else {
        document.querySelector('#black').style.borderColor = "black";
    }
    
    if (color == "red") {
        document.querySelector('#red').style.borderColor = "gold";
    } else {
        document.querySelector('#red').style.borderColor = "black";
    }

    if (color == "white") {
        document.querySelector('#white').style.borderColor = "gold";
    } else {
        document.querySelector('#white').style.borderColor = "black";
    }

    if (color == "blue") {
        document.querySelector('#blue').style.borderColor = "gold";
    } else {
        document.querySelector('#blue').style.borderColor = "black";
    }

    if (color == "yellow") {
        document.querySelector('#yellow').style.borderColor = "gold";
    } else {
        document.querySelector('#yellow').style.borderColor = "black";
    }

    if (color == "#b300b3") {
        document.querySelector('#purple').style.borderColor = "gold";
    } else {
        document.querySelector('#purple').style.borderColor = "black";
    }

    if (color == "#33ff77") {
        document.querySelector('#green').style.borderColor = "gold";
    } else {
        document.querySelector('#green').style.borderColor = "black";
    }

    if (color == "orange") {
        document.querySelector('#orange').style.borderColor = "gold";
    } else {
        document.querySelector('#orange').style.borderColor = "black";
    }

    if (color == "#ff80d5") {
        document.querySelector('#pink').style.borderColor = "gold";
    } else {
        document.querySelector('#pink').style.borderColor = "black";
    }

    if (color == "#66ffe6") {
        document.querySelector('#aqua').style.borderColor = "gold";
    } else {
        document.querySelector('#aqua').style.borderColor = "black";
    }
}    

changeColor('black');
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


populateBoard(40);

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


