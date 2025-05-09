let score = JSON.parse(localStorage.getItem('score')) || 
{
    wins : 0,
    lose : 0,
    ties : 0
};
updateScore();
let result;
function PlayGame(PlayerMove){
const computerMove = PickComputerMove();

if(PlayerMove === 'scissors'){

if(computerMove === 'rock'){
result = 'you lose';
}else if(computerMove === 'paper'){
result = 'you win';
}else if(computerMove === 'scissors'){
result = 'tie';
}
}
else if(PlayerMove === 'paper'){
if(computerMove === 'rock'){
result = 'you win';
}else if(computerMove === 'paper'){
result = 'tie';
}else if(computerMove === 'scissors'){
result = 'you lose';
}
}

else if(PlayerMove === 'rock'){
if(computerMove === 'rock'){
result = 'tie';
}else if(computerMove === 'paper'){
result = 'you lose';
}else if(computerMove === 'scissors'){
result = 'you win';

}
}
if(result === 'you win'){
score.wins += 1;
}else if(result === 'you lose'){
score.lose += 1;
}else if (result === 'tie'){
score.ties += 1;
}
localStorage.setItem('score', JSON.stringify(score));

updateScore();
results();
document.querySelector('.js-move').innerHTML
= `You
<img src="images/${PlayerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;

/* alert(`you pick  ${PlayerMove}. Computer pick ${computerMove}. ${result}
Wins: ${score.wins}, Lose: ${score.lose}, Ties: ${score.ties}`);*/
}
function results(){
document.querySelector('.js-results')
.innerHTML = result;
}

function updateScore(){
document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins}, Lose: ${score.lose}, Ties: ${score.ties}`;
}
let isAutoPlaying = false;
let IntervalD;

function AutoPlay(){
    if(!isAutoPlaying){
    IntervalD=setInterval( function (){
        const PlayerMove =PickComputerMove();
    PlayGame(PlayerMove)}, 1000
);
isAutoPlaying = true;
}else {
    clearInterval(IntervalD);
}
const buttonElement = document.querySelector('.AutoPlay-button');
if(buttonElement.innerHTML === 'Auto Play'){
buttonElement.innerHTML = 'Stop Play';
//buttonElement.classList.add('is-subscribed');
}else {
buttonElement.innerHTML = 'Auto Play';
//buttonElement.classList.remove('is-subscribed');

}
    }
    document.querySelector('.js-addListener-rock').addEventListener( 'click', ()=> {
        PlayGame('rock');
    });
    document.querySelector('.js-addListener-paper').addEventListener( 'click', ()=> {
        PlayGame('paper');
    });
    document.querySelector('.js-addListener-scissors').addEventListener( 'click', ()=> {
        PlayGame('scissors');
    });
 document.body.addEventListener('keydown', (event)=>{
if(event.key==='r' || 'R'){
    PlayGame('rock');
}else if(event.key === 'p' || 'P'){
    PlayGame('paper');
}else if(event.key === 's' || 'S'){
    PlayGame('scissors');
}
 });

function PickComputerMove() {
//let result = '';
let randomNumber = Math.random();
let computerMove = ''; 
if (randomNumber >= 0 && randomNumber < 1 / 3) {
computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
computerMove = 'scissors';
}
//console.log(computerMove);
return computerMove;
} 