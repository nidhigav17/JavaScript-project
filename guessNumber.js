let randomNumber=Math.trunc(Math.random()*20+1);
console.log(randomNumber);

let guessValue=document.getElementById("gusssNumber");
console.log(guessValue);

let checkButton=document.querySelector(".checkbtn");
console.log(checkButton);
checkButton.addEventListener("click",guessNumber);

let textMessage=document.querySelector(".messageshow");
let score=20;

let scoreValue=document.querySelector(".messageScore");
let heihScore=document.querySelector(".messageScoreHeigh");
const resultValue=document.querySelector(".resultShow");
const body=document.querySelector("body");


function guessNumber(){
    let userValue=Number(guessValue.value);
   // console.log(userValue);
   if(!userValue){
    alert("enter the value");
   }else if(userValue<1 || userValue>20){
    alert("Please enter the value between 1 and 20");
   }else if(userValue===randomNumber){
    textMessage.textContent="Correct Number";
    scoreValue.textContent=score;
    heihScore.textContent=`Heigh Score : ${score}`;
    resultValue.textContent=userValue;
    body.style.backgroundColor="green";
   }else if(userValue<randomNumber){
    score--;
    scoreValue.textContent=score;
    textMessage.textContent="Too loooooooooooo";
   }else{
    score--;
    scoreValue.textContent= score;
    textMessage.textContent="tooo Heighiiiiiiiiiiii";
   }
}


let resetBtn=document.querySelector(".resetGame");

resetBtn.addEventListener("click", resetValue);

function resetValue(){
    window.location.reload();
}
