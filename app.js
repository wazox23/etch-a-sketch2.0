"use strict";
const board = document.getElementById("board");
let color;
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)


  function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
    
  }

 

function populateBoard(size){
  
    
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    board.style.border = '5px solid white';
    board.style.borderRadius = '20px'
    
    if(size > 64){
        alert("Please enter size between 1 and 64")
        square.style.backgroundColor = 'white';
    } else {

    let amount = size * size;
    for (let i = 0; i < amount; i++){
        const square = document.createElement("div");
        square.style.backgroundColor = "#fff";
        board.append(square)
        square.addEventListener("mouseover",()=>{
            square.style.backgroundColor = `${color}`;
            
        });

        const inputColor = document.getElementById("inputColor")
        const setColor = document.getElementById("setColor")
        setColor.addEventListener("click" ,()=> {
            color = inputColor.value;
        });

        const resetButton = document.getElementById("resetBtn")
        resetButton.addEventListener("click", ()=> {
            square.style.backgroundColor = "#fff"
            color = "white";
        })
    };
        
    };

      
};





populateBoard(50)