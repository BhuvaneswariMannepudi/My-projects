const btn=document.getElementById("btn")
btn.onclick=function(){
    let num=document.getElementById("inp").value;
    let content=document.getElementById("content");
    let pics=document.getElementById("images");
    let values=[];
    let images=[];

    for (let i=0;i<num;i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value)
        images.push(`<img src="diceimg/${value}.png" alt="dice:${value}">`)
       

    }
   
   content.textContent=`dice:${values.join(",")}`
   pics.innerHTML=images.join(``)
}