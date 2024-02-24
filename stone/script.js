
let str=0;
const button=document.querySelectorAll(".btn")
console.log(button)
const comp = document.querySelector("#comp")
const scissor = document.querySelector("#scissor")
const stone= document.querySelector("#stone")
const paper= document.querySelector("#paper")
const user= document.querySelector("#user")
const timer = document.querySelector("#counter")
const result= document.querySelector("#result")
const restart =document.querySelector('#restart')
const continued= document.querySelector('#continue')
const comp_result= document.querySelector('#comp_result')
const user_result = document.querySelector('#user_result')
const output = document.querySelector('#exit')
const output1 =document.querySelector('.output')



let random_number=0;
random_number=Math.floor(Math.random()*3+1)
console.log(random_number)
    
    

function timer_Click() {
 

let settime= setInterval(() => {
 timer.innerHTML--;

    if(timer.innerHTML==0)
    {
       
        disable_stone();
        disable_paper();
        disable_scissor();
       
        result.innerHTML=result_decleration();
        clearInterval(settime)
    }
}, 1000);
}
//inital call
timer_Click();


///restart section

restart.addEventListener("click",()=>{
    timer.innerHTML="5"
    stone.addEventListener("click",stone_click)
    stone.style.opacity="1"
choose();
paper.addEventListener("click",paper_click)
paper.style.opacity="1"
scissor.addEventListener("click",scissor_click)
scissor.style.opacity="1"
user.innerHTML="";
comp.innerHTML="";
result.innerHTML=""
result.style.backgroundColor="";
user_result.innerHTML="0"
comp_result.innerHTML="0"
random_number=Math.floor(Math.random()*3+1)
console.log(random_number)
output1.innerHTML="";
output1.style.opacity="0";
output1.style.height ="0px"
output1.style.width ="0vw"
timer_Click();
 
})



//continue section
continued.addEventListener("click",()=>{
    timer.innerHTML="5"
    stone.addEventListener("click",stone_click)
    stone.style.opacity="1"
choose();
paper.addEventListener("click",paper_click)
paper.style.opacity="1"
scissor.addEventListener("click",scissor_click)
scissor.style.opacity="1"
user.innerHTML="";
comp.innerHTML="";
//random_number="";
result.innerHTML=""
result.style.backgroundColor="";

random_number=Math.floor(Math.random()*3+1)
console.log(random_number)

timer_Click();
})


//user section

function stone_click(){
    str=1
user.innerHTML="YOU CHOOSE ROCK"

}
function paper_click() {
    str=2
   user.innerHTML= "YOU CHOOSE PAPER"
  
}
function scissor_click() {
       str=3
    user.innerHTML="YOU CHOOSE SCISSOR";
 
}

    
 stone.addEventListener("click",stone_click)

paper.addEventListener("click",paper_click)

scissor.addEventListener("click",scissor_click)

setTimeout(() => {
    
  }, 2000);
 
function disable_stone() {
    stone.removeEventListener("click",stone_click)
    stone.style.opacity="0.3"
}
function disable_paper() {
    paper.removeEventListener("click",paper_click)
    paper.style.opacity="0.3"  
}
function disable_scissor() {
    scissor.removeEventListener("click",scissor_click)
    scissor.style.opacity="0.3"
}

//exit button 
output.addEventListener("click",()=>{
    if(comp_result.innerHTML>user_result.innerHTML)
    {
        output1.innerHTML="OOPS! YOU LOOSE THE GAME"
        output1.style.opacity="1"
        output1.style.height ="300px"
output1.style.width ="98.9vw"
    }
    else if(comp_result.innerHTML===user_result.innerHTML)
    {
        output1.innerHTML="MATCH TIED"
output1.style.opacity="1"
output1.style.height ="300px"
output1.style.width ="98.9vw"
    }
    else{
output1.innerHTML="HURRYAH YOU WON THIS GAME!"
output1.style.opacity="1"
output1.style.height ="300px"
output1.style.width ="98.9vw"
    }
    restart.style.opacity="0"
    continued.style.opacity="0"
    button.style.margin="40vw";


})

//computer section

function choose() {
   switch (random_number) {
    case 1:
        comp.innerHTML="COMPUTER CHOOSE ROCK"
        break;
    case 2:
    comp.innerHTML="COMPUTER CHOOSE PAPER"
        break;
     case 3:
        comp.innerHTML="COMPUTER CHOOSE SCISSOR"
        break;
   }
}

//result section
function result_decleration() {

    if(str===0)
    {  result.style.color="yellow";
        return "YOU DIDN`T ENTER YOUR CHOICE"
    }
    else {
if(str===random_number){
    choose();
    comp_result.innerHTML++;
    user_result.innerHTML++;
    result.style.backgroundColor="yellow";
     return "MATCH DRAWN";
}
else
{ choose();
    if((str===1)&&(random_number===2))
    {
        comp_result.innerHTML++;
        result.style.backgroundColor="red";
        return "comp win"
        
        
    }
    else if((str===1)&&(random_number===3))
    {
        user_result.innerHTML++;
        result.style.backgroundColor="green";
        return "you win";
    }
    else if((str===2)&&(random_number==1))
    {
        user_result.innerHTML++;
        result.style.backgroundColor="green";
        return"you win";
    }
    else if((str===2)&&(random_number===3))
    {
        comp_result.innerHTML++;
        result.style.backgroundColor="red";
        return"comp win";
    }
    else if((str===3)&&(random_number===1))
    {
        comp_result.innerHTML++;
        result.style.backgroundColor="red";
        return"comp win";
    }
    else if((str===3)&&(random_number===2))
    {
        user_result.innerHTML++;
        result.style.backgroundColor="green";
        return"you win"
    }
}
    }
}
