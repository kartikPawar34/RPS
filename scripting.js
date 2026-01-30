document.getElementById("demo").innerHTML="----------------Javascript is working----------------";

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
function NumberGenerator(){
  const print = document.getElementById("display-1");

  let GenNum = Math.floor(Math.random()*1000)+1;
  let GenMul = Math.floor(Math.random()*1000)+1;
  let target = [
   GenNum+" x "+GenMul+" = "+(GenNum*GenMul),
   GenNum+" + "+GenMul+" = "+(GenNum+GenMul),
   GenNum+" / "+GenMul+" = "+(GenNum/GenMul)
  ];
let randomIndex = Math.floor(Math.random() * target.length);
print.innerHTML = target[randomIndex];
}
