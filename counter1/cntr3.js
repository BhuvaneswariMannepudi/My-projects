const incbtn=document.getElementById("incbtn")
const decbtn=document.getElementById("decbtn")
const rstbtn=document.getElementById("rstbtn")
const cntlab=document.getElementById("cntlab")
let count= 0;
decbtn.onclick=function(){
    count--;
    cntlab.textContent=count;
}
incbtn.onclick=function(){
    count++;
    cntlab.textContent=count;
}
rstbtn.onclick=function(){
    count=0;
    cntlab.textContent=count;
}