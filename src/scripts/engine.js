const state = {
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelectorAll(".enemy"),
        timeLeft: document.querySelectorAll("#time-left"),
        score: document.querySelectorAll("#socre"), 
     },
    values:{ },
};


function randomSquares(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random()*9);
    let randomSquare = state.view.squares[randomNumber];

    randomSquare.classList.add("enemy");
}

function addListenerHitBox(){
    state.view.squares.forEach((square )=> {
        
    });
}

function initialize(){
    randomSquares();
}

initialize();