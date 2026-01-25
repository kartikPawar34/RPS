document.getElementById("demo").innerHTML="Javascript is working";

function Rock(){
  PlayerMove("Rock");
}
function Paper(){
  PlayerMove("Paper");
}
function Scissor(){
  PlayerMove("Scissor");
}

function computer(){
  let computerMove = Math.random();

  if(computerMove < 1/2){
    return "Rock";
  }else if(computerMove < 2/3){
    return "Paper";
  }else{
    return "Scissor";
  }
}

function PlayerMove(humanMove){
  let computerMove = computer();
  let Result="";

  if(humanMove === computerMove){
    Result ="it's Tie";
  }else if((humanMove === "Rock" && computerMove === "Paper")||(computerMove === "Scissor" && computerMove === "Rock")||(humanMove === "Paper" && computerMove === "Scissor" )){
    Result ="You Loose and Computer Win ";
  }else{
    Result ="you win"
  }

  document.getElementById("Result").innerHTML = Result;
  document.getElementById("turns").innerHTML = `Computer Choose ${computerMove}, Player Move ${humanMove} `;

}
