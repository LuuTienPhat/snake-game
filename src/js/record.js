const score = document.querySelector(".score");
const bestScore = document.querySelector(".best-score");

let record;

//load data from localStorage
function loadFromLocalStorage(){
    //check if bestScore exists
    if(!localStorage.bestScore){
        //if it does not exist
        record = 0;
    }
    else {
        //if exists
        record = JSON.parse(localStorage.getItem("bestScore"));
    } 
};

//if score > bestScore then bestScore will increase at the same time as score
function whenScoreBiggerThanBest(){
    if(snake.total > record) {
        record = snake.total;
    }
    //display best score
    bestScore.innerHTML = `Best: ${record}`;
}

//save best score to localStorage after you lose
function saveToLocalStorage(){
    localStorage.setItem("bestScore",record);
}

//display your score
function showYourScore(){
    score.innerHTML = `Score: ${snake.total}`;
}