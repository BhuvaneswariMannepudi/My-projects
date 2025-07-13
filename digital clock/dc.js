function updateclk(){
    const now =new Date()
    let hrs= now.getHours();
    const meridian=hrs>=12? "PM":"AM";
    hrs=hrs%12 || 12;
    hrs= hrs.toString().padStart(2,0);
    const mins= now.getMinutes().toString().padStart(2,0);
    const sec= now.getSeconds().toString().padStart(2,0);
    const timeString=`${hrs}:${mins}:${sec} ${meridian}`;
    document.getElementById("clk").textContent=timeString;
}
setInterval(updateclk,1000)
