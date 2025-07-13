input=document.getElementById("inp")
ctof=document.getElementById("rd1")
ftoc=document.getElementById("rd2")
submit=document.getElementById("sub")
ans=document.getElementById("ans")
let temp;
submit.onclick=function(){
    if(ctof.checked){
        temp=input.value;
        temp=temp * 9/5 + 32
        ans.textContent=temp.toFixed(1)+"°F";
        
    }
    else if(ftoc.checked){
        temp=input.value;
        temp=(temp-32)*(5/9)
        ans.textContent=temp.toFixed(1)+"°C";
    }
    else{
        ans.textContent="select any unit"
    }

}

