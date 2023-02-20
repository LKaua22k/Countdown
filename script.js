let DataF = new Date("May 29 2023 00:00").getTime();

let dias , horas , minutos , segundos;

function dgebi(e){
    return document.getElementById(e)
}

let Inter = setInterval(() =>{
let DataA = new Date().getTime();

let DataTotal = (DataF - DataA)/1000;

dias = parseInt(DataTotal/86400);
DataTotal = DataTotal%86400;

horas = parseInt(DataTotal/3600);
DataTotal = DataTotal%3600;

minutos = parseInt(DataTotal/60);
segundos = parseInt(DataTotal%60);

dgebi('span').innerHTML = `${tl(dias) + ' : ' + tl(horas) + ' : ' + tl(minutos) + ' : ' + tl(segundos)}`

function tl(time){
    return time < 10 ?`0${time}`: time ; 
}

if(DataTotal <= 0){
    clearInterval(Inter);
    console.log("OK")
}
},1000);