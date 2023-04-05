//Emre Başer 
let firstName = prompt("Lütfen adınızı giriniz");
let myName=document.querySelector("#myName")
myName.innerHTML=firstName


function showTime(){
    let myClock=document.querySelector(`#myClock`)
    let date= new Date()
    const days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    myClock.innerHTML=`
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} 
    ${days[date.getDay()]}
    `  
}
setInterval(showTime,1000)