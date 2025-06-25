let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorep=document.querySelector("#user-score");
const computerScorep=document.querySelector("#comp-score");
const rest=document.querySelector(".restart");
const upmsg= document.querySelector(".upper");
const generateChoice=()=>{
const options=["rock","paper","scissor"];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
};
const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userScorep.innerText=userScore;
        msg.innerText=`You win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
       computerScore++;
       computerScorep.innerText=computerScore;    
        msg.innerText=`You lose.${compchoice} beats your ${userchoice}`;
            msg.style.backgroundColor="red";
    }
}
const playGame=(userchoice)=>{
    const compchoice=generateChoice();
    upmsg.innerText=`Computer choosed:${compchoice}`;
    if(userchoice === compchoice){
msg.innerText="Game draw."
    msg.style.backgroundColor="black";
    }
    else{
        let userwin = true;
        if(userchoice==="rock"){
        userwin= compchoice==="paper"?false:true;
    }
    else if(userchoice === "paper"){
userwin=compchoice === "scissor"?false:true;
}
else{
    userwin=compchoice==="rock"?false:true;
}
showWinner(userwin,userchoice,compchoice);
    }
};
choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
   playGame(userchoice);
})
});
rest.addEventListener("click",()=>{
    userScore=0;
    computerScore=0;
    upmsg.innerText=""; //make empty when restart is selected
    userScorep.innerText=userScore;
    computerScorep.innerText=computerScore;
    msg.innerText="Pick your choice";  
    msg.style.backgroundColor="black";
});