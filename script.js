let DataF = new Date("June 15 2023 00:00").getTime();

let dias , horas , minutos , segundos;

function teste(e){
    return document.getElementById(e)
}

let tet = setInterval(() =>{
let DataA = new Date().getTime();

let DataTotal = (DataF - DataA)/1000;

dias = parseInt(DataTotal/86400);
DataTotal = DataTotal%86400;

horas = parseInt(DataTotal/3600);
DataTotal = DataTotal%3600;

minutos = parseInt(DataTotal/60);
segundos = parseInt(DataTotal%60);

teste('Days').innerHTML = tl(dias)
teste('Hors').innerHTML = tl(horas) + ':';
teste('Minutes').innerHTML = tl(minutos) + ':';
teste('Seconds').innerHTML = tl(segundos);

function tl(time){
    return time < 10 ?`0${time}`: time ; 
}

if(DataTotal <= 0){
    clearInterval(tet);
    console.log("OK")
}
},1000);