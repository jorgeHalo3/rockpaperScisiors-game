var choices =['Rock','Paper', 'Scissors'];
var letsPlay = 0
var x=5;
var y = 0;
var i= 0;
var t= 0;
var ties = 0;
const playerChoice = function(){
    let onClick = document.getElementsByClassName
    return onClick
    letsPlay++
}
document.getElementById('Rock').onClick = playerChoice;
document.getElementById('Paper').onClick =playerChoice;   
document.getElementById('Scissors') .onClick =playerChoice  


function RockPapperScissors(){do{   
    
//////game/////
function theGame(){
    
var computerChoice = choices[Math.floor(Math.random() * choices.length)]  
var playerOne = playerChoice;
console.log(computerChoice);
console.log(playerOne);
///////////if player chooses Rock/////////////////////////////////////////////////////////
if( playerOne == 'Rock'&& computerChoice == 'Scissors' ){
    console. log("Rock beats Paper player wins");
    return i++ ;
        
    }else if( playerOne == 'Rock' && computerChoice == 'Paper'){
        console.log("Paper covers Rock computer wins");
         return t++;
    
        }else if (playerOne=='Rock' && computerChoice =='Rock'){
        console.log("tie no one wins");
        return (ties++);
    }
/////////////////// ////////player chooses Paper///////////////////////////////////////////////
if( playerOne == 'Paper'&& computerChoice == 'Scissors' ){
    console. log("Scissors cut Paper computer wins");
    return t++;

}else if( playerOne == 'Paper' && computerChoice == 'Paper'){
        console.log("tie no one wins");
        return (ties++);

    }else if (playerOne=='Paper' && computerChoice =='Rock'){
        console.log("Paper covers Rock player wins");
        return i++;
    }

/////////////////////////////////////////////player chooses Scissors/////////////////////
if( playerOne == 'Scissors'&& computerChoice == 'Scissors' ){
    console. log("tie no one wins");
    return (ties++);

}else if( playerOne == 'Scissors' && computerChoice == 'Paper'){ 
    console.log("Scissors cut Paper player wins");
    return i++;

}else if (playerOne=='Scissors' && computerChoice =='Rock'){
        console.log("Rock beats Scissors computer wins");}
       return t++;

    }
theGame();

/////////////////////////////////endgame//////////////////////////////////////////////////
function reapeat(){
 
 if (y < x){
    y++;
    return theGame;
 }else if (y= x){
     console.log('thanks for playing');
      }
}
reapeat();
}while(letsPlay <= 1 )
}

RockPapperScissors();
///////////////////////////////////scoreboard/////////////////////////////////


function theScore(){
if(i>t ){
console.log("player score " +i+ " computer score " +t+" ties "+ties);
console.log('you won yay!');
}
else if(i==t){
console.log("player score "+i+ " computer score " +t+" ties "+ties);
console.log("tie one one wins");
}
else{
console.log("player score "+i+ " computer score " +t+" ties "+ties);
console.log("you lost");
}
}theScore();