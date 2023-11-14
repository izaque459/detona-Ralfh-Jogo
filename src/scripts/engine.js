const state = {
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        livesLeft: document.querySelector("#lives"),
     },
    values:{ 
      //  gameVelocity: 1000,
        lives: 3,
        hitPosition: 0,
        result: 0,
        currentTime: 60,
    },
    actions:{
        timerId: setInterval(randomSquares,1000),
        countDownTimerId: setInterval(countDown,1000),
    }
};


function endGame(){
    clearInterval(state.actions.timerId);
    clearInterval(state.actions.countDownTimerId);
    alert("Game Over! O seu resultado foi: "+ state.values.result);

}

function decrementLives(){
    state.values.lives--;
    state.view.livesLeft.textContent=`x${state.values.lives}`;

    if(state.values.lives<=0){
       endGame();
    }
}

function playSound(audioName,formato){
    let audio = new Audio(`./src/audios/${audioName}.${formato}`);
    audio.volume = 0.2;
    audio.play();
}

function countDown(){
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if(state.values.currentTime<=0){
        endGame();
    }
}


function randomSquares(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random()*9);
    let randomSquare = state.view.squares[randomNumber];

    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;

}

/*
function moveEnemy(){
    state.values.timerId = setInterval(randomSquares,state.values.gameVelocity);
}
*/

function addListenerHitBox(){
    state.view.squares.forEach((square )=> {
        square.addEventListener("mousedown", ()=>{
          
            if (state.values.currentTime > 0 && state.values.lives > 0){
                if(square.id === state.values.hitPosition){
                    state.values.result++;
                    state.view.score.textContent = state.values.result;
                    state.values.hitPosition = null;
                    playSound("hit","m4a");
                }else{
                    decrementLives();
                    playSound("failure-drum-sound-effect","mp3");
                }
            }

        });
    });
}

function initialize(){
   // moveEnemy();
    addListenerHitBox();
}

initialize();