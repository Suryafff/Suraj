
let sting ="";
const equal= document.querySelector("#equal")
const bttn = document.querySelectorAll("button")
Array.from(bttn).forEach((button)=>{
    button.addEventListener("click",function(e) {
        if(e.target.innerHTML=="=")
       {
       sting = eval(sting)
       document.querySelector('input').value=sting;
       }
       else if(e.target.innerHTML=="AC")
       {
       sting = ""
       document.querySelector('input').value=sting;
       }
       else if(e.target.innerHTML == "del")
       {
        sting=sting.substring(0,sting.length-1)
        document.querySelector('input').value=sting;
       }
       
       else if(e.target.innerHTML=="%")
       {
        sting = (eval(sting)/100)
       document.querySelector('input').value=sting;
       }
       else{
      
        console.log(e.target)
        sting=sting+e.target.innerHTML;
        document.querySelector('input').value=sting;
       }
       
    })
})


  
console.log(sting)