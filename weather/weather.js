const weatherform=document.querySelector(".weatherform");
const cityinput=document.querySelector(".cityinp");
const card=document.querySelector(".card");
const apikey="171dd7b20bff6105c2ded782f58f5a2e";

weatherform.addEventListener("submit", async event=>{
    event.preventDefault();
    const city=cityinput.value;
    if (city){
        try{
            const weatherdata=await getweatherdata(city);
            displayweatherinfo(weatherdata);
        }
        catch(error){
            console.log(error);
            displayerror(error);
        }
    }
    else{
        displayerror("please enter a city");
    }

});



async function getweatherdata(city){
    const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response= await fetch(apiurl);
    if(!response.ok){
        throw new Error("could not fetch weather data");
    }
    return await response.json();
}


function displayweatherinfo(data){
    const {name:city,
           main:{temp,humidity},
           weather:[{description,id}]}=data;
    card.textContent="";
    card.style.display="flex";

    const citydisplay=document.createElement("h1");
    const tempdisplay=document.createElement("p");
    const humditydisplay=document.createElement("p");
    const desdisplay=document.createElement("p");
    const emoji=document.createElement("p");

    citydisplay.textContent=city;
    tempdisplay.textContent=`${((temp-273.15)*(9/5)+32).toFixed(1)}°F`;
    humditydisplay.textContent=`Humidty:${humidity}%`;
    desdisplay.textContent=`${description}`;
    emoji.textContent= getweatheremoji(id);

    citydisplay.classList.add("citydisplay");
    tempdisplay.classList.add("tempdisplay");
    humditydisplay.classList.add("humditydisplay");
    desdisplay.classList.add("desdisplay");
    emoji.classList.add("emoji");

  
    card.appendChild(citydisplay);
    card.appendChild(tempdisplay);
    card.appendChild(humditydisplay);
    card.appendChild(desdisplay);
    card.appendChild(emoji);

}



function getweatheremoji(weatherId){
    switch(true){
        case(weatherId>=200 && weatherId<300):
            return "⛈️";
        case(weatherId>=300 && weatherId<400):
            return "🌧️";
        case(weatherId>=500 && weatherId<600):
            return "🌦️";
        case(weatherId>=600 && weatherId<700):
            return "❄️";
        case(weatherId>=700 && weatherId<800):
            return "⛅";
        case(weatherId==800):
            return "🌞";
        case(weatherId>=801 && weatherId<810):
            return "☁️";
        default:
            return "?";
        
    }

}





function displayerror(msg){
    const errordisplay=document.createElement("p");
    errordisplay.textContent=msg;
    errordisplay.classList.add(".errordisplay");

    card.textContent="";
    card.style.display="flex";
    card.appendChild(errordisplay)

}