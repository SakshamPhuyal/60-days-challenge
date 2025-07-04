const weatherForm = document.querySelector(".srch");
const cityName=document.querySelector(".cityname");
const box=document.querySelector(".box");
const apikey= "5d218bafb0c2eb3f69edaf66e0280118";
weatherForm.addEventListener("submit", async event =>{
event.preventDefault();
const city=cityName.value;
if(city){

try{
   const data= await getdata(city);
displayinfo(data);
}
catch(error){
console.error(error);
    displayerror();
}

}
else{
   displayerror()
}
}
);
async function getdata(city) {
const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5d218bafb0c2eb3f69edaf66e0280118`//api key
  const response=await fetch(apiurl);
 if(!response.ok){
    throw new Error("could not fetch data");
}
return await response.json();
}
function displayinfo(data){
document.querySelector(".city").textContent=`${data.name},${data.sys.country}`;
document.querySelector(".temperature").textContent= `Temperature : ` +
      String(Math.floor(Number(data.main.temp) - 273.15)) +
      ` °C`;
document.querySelector("#humid").textContent=`Humidity: ${data.main.humidity}%`;
document.querySelector("#pressure").textContent=`Pressure: ${data.main.pressure} hPa`;
document.querySelector("#speed").textContent=`Wind Speed: ${data.wind.speed} m/s`
 const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
  document.getElementById("sunrise").textContent = `Sunrise: ${sunrise}`;
  document.getElementById("sunset").textContent = `Sunset: ${sunset}`;

}
function displayerror(){
 alert("Enter a valid city");
}
console.log("hei");