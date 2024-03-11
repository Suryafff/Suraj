//globally scoped variables 

const result = document.querySelector(".result")
 const sub= document.querySelector("#submit")
 const bal_check= document.querySelector("#bal-check")
 const deposit = document.querySelector("#deposit")
  const withdrawl = document.querySelector("#Withdrawl")
const logout = document.querySelector("#logout")
let balance = 10000;








 sub.addEventListener("click",()=>{
    const input = document.querySelector("input").value;
console.log(input)
if(input=="1234")
{
    result.innerHTML= "Login Successfully !"

}
else if(input ==="")
{
    result.innerHTML= "Please enter pin to login !"

    setTimeout(()=>{
        location.reload();
            },800)

}
else{
    result.innerHTML= "Wrong Pin !"
    setTimeout(()=>{
location.reload();
    },3000)

}

bal_check.addEventListener("click",()=>{
    
    result.innerHTML= ` Your balance is RS ${balance}`
 
})
deposit.addEventListener("click",()=>{
  let deposit_ammount = parseFloat(prompt("enter ammount to deposit "))
   
if(deposit_ammount<=0){
result.innerHTML="Invalid Ammount For Deposit !"
}
else{
    let da = deposit_ammount+balance;
result.innerHTML= "deposit succesfull!"
balance = da;
}

})

withdrawl.addEventListener("click",()=>{
    let withdrawl_ammount = parseFloat(prompt("enter ammount to withdrawl "))
     if (withdrawl_ammount<=0||withdrawl_ammount>=balance) {
        result.innerHTML="Insucciffent Ammount For Withdrawl  !."
     } else {
        let wa = balance-withdrawl_ammount;
  result.innerHTML= `   withdrawal sucessful !`
  balance = wa;
     }
  })

  logout.addEventListener("click",()=>{
    
   
    result.innerHTML= "Logout successfully !."
    
    setTimeout(()=>{
        location.reload();
            },300)

  })
 

})
