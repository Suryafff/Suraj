let priceds= document.querySelector("#ammount")
let tenure= document.querySelector("#time");
let intrest = document.querySelector("#int");
let output =document.querySelector(".return")
let gain = document.querySelector("#gained");
let invest_box= document.querySelector(".investment") 
let o1= document.querySelector(".output")
console.log(output)
let total;

// console.log(i)
let button = document.querySelector("button")
button.addEventListener("click",()=>{
    let  principal = parseInt(priceds.value);
   let time = parseInt((tenure.value)*12)
   let int =  parseFloat(((intrest.value)/12)/100)
invest_box.style.position="relative"
invest_box.style.left="10px"
o1.style.opacity  ="1"

 total =Math.ceil( principal*((Math.pow(1+int,time)-1)/int));
output.innerHTML = total
let net_gain= total-(principal*time)
gain.innerHTML=net_gain;

})