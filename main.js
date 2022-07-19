var choices =['Rock','Paper', 'Scisorrs'];
var x=5;
var y = 0;
var i= 0;
var t= 0;
var ties = 0;

function RockPapperScisorrs(){do{   
    
//////game/////
function theGame(){
    
var computerChoice = choices[Math.floor(Math.random() * choices.length)]  
var playerOne = ;
console.log(computerChoice);
console.log(playerChoice);
///////////if player chooses Rock/////////////////////////////////////////////////////////
if( playerChoice == 'Rock'&& computerChoice == 'Scisorrs' ){
    console. log("Rock beats Paper player wins");
    return i++ ;
        
    }else if( playerChoice == 'Rock' && computerChoice == 'Paper'){
        console.log("Paper covers Rock computer wins");
         return t++;
    
        }else if (playerChoice=='Rock' && computerChoice =='Rock'){
        console.log("tie no one wins");
        return (ties++);
    }
/////////////////// ////////player chooses Paper///////////////////////////////////////////////
if( playerChoice == 'Paper'&& computerChoice == 'Scisorrs' ){
    console. log("Scisorrs cut Paper computer wins");
    return t++;

}else if( playerChoice == 'Paper' && computerChoice == 'Paper'){
        console.log("tie no one wins");
        return (ties++);

    }else if (playerChoice=='Paper' && computerChoice =='Rock'){
        console.log("Paper covers Rock player wins");
        return i++;
    }

/////////////////////////////////////////////player chooses Scisorrs/////////////////////
if( playerChoice == 'Scisorrs'&& computerChoice == 'Scisorrs' ){
    console. log("tie no one wins");
    return (ties++);

}else if( playerChoice == 'Scisorrs' && computerChoice == 'Paper'){ 
    console.log("Scisorrs cut Paper player wins");
    return i++;

}else if (playerChoice=='Scisorrs' && computerChoice =='Rock'){
        console.log("Rock beats Scisorrs computer wins");}
       return t++;

    }
theGame();

/////////////////////////////////endgame//////////////////////////////////////////////////
function reapeat(){
 
 if (y <= x){
    y++;
 }else if (y> x){
     console.log('thanks for playing');
      }
}
reapeat();
}while(y<=x)
}
///////////////////////////////////scoreboard/////////////////////////////////
RockPapperScisorrs();

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