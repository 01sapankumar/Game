let userscore = 0;
let compscore = 0;

const chosices = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const userCompPara = document.querySelector("#comp-score");


const gencompchoise = ()=>{
    const option = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return option [ranIdx];
}

const drawgame = () =>{
    console.log ("game was draw.");
    msg.innerText="Game is Draw, play again!"
    msg.style.backgroundColor = "brown";

};

const showWinner= (userWin)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        console.log("you win!");
        msg.innerText= `you Win! your ${'userchoise'} beats ${'compchoise'}`;
        msg.style.backgroundColor="green";
    } else {
        compscore++;
        userCompPara.innerText = compscore;
        console.log("you loss"); 
        msg.innerText=`You loss. your ${'compchoise'} beats your ${'userchoise'}`;
        msg.style.backgroundColor = "red";

    }
};
const playgame = (userchoise)=>{
    console.log( " user choise =" , userchoise);
    const compchoise = gencompchoise();
    console.log("comp choise= ", compchoise);

    if ( userchoise === compchoise){
        drawgame();
    }
    else {
        let userWin = true;
        if ( userchoise=== "rock"){
            userWin = compchoise === "paper" ? false : true;
        }
        else if( userchoise === "paper"){
            userWin = compchoise === "scissors"? false : true;
        }
        else{
            userWin = compchoise === "rock"? false : true;
        }
        showWinner(userWin);
    }
};
  


chosices.forEach((choise)=>{

    const userchoise = choise.getAttribute("id");
    choise.addEventListener("click", ()=>{
        playgame(userchoise);
    });
});
