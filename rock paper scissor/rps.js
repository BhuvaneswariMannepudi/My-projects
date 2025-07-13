const choices=["rock👊","paper🤚","scissor✌️"]
const player=document.getElementById("pl")
const computer=document.getElementById("co")
const result=document.getElementById("res")
function playgame(playerchoice){
    const computerchoice=choices[Math.floor(Math.random()*3)];
    let result1="";
    if (playerchoice===computerchoice){
        result1="Its a tie😊"
    }
    else{
        switch(playerchoice){
            case"rock👊":
               result1= (computerchoice==="scissor✌️")?"You won😍":"You loss😒";
               break;
            case"paper🤚":
               result1= (computerchoice==="rock👊")?"You won😍":"You loss😒";
               break;
            case"scissor✌️":
               result1= (computerchoice==="paper🤚")?"You won😍":"You loss😒";
               break;
        }
    }
    player.textContent=`Player:${playerchoice}`
    computer.textContent=`Computer:${computerchoice}`
    result.textContent=result1; 
}