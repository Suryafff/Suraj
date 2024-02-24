const click = document.querySelector(".clickbtn")
const start = document.querySelector("#start")
const second= document.querySelector("#sec")
const minute = document.querySelector("#min")
const hours = document.querySelector("#hrs")
const milli= document.querySelector("#ms")
const stopped = document.querySelector("#stop")
const restart =document.querySelector("#reset")

let count = 0;
let sst ;

//for start button 
start.addEventListener("click",function (e) {

      sst = setInterval(time,1)  
   
})

//for pause button
stopped.addEventListener("click",()=>{
    clearInterval(sst)
})

//for reset button
restart.addEventListener("click",function (e) {
    reload();
})
//or start timing
function time() {

        count ++;
        milli.innerHTML= count;
        if(milli.innerHTML==203)
        {
            second.innerHTML++;
            count =0;
        }
        else if(second.innerHTML==60)
        {
            minute.innerHTML++;
            second.innerHTML=0;
            count =0;

        }
        else if( minute.innerHTML==60)
    {
        hours.innerHTML++;
        minute.innerHTML=0;
        second.innerHTML=0;
        count =0;
    }

    //for stop timming
}
function seop() {
    timer =0;
 
}
//for reload
function reload() {
 location.reload();
}