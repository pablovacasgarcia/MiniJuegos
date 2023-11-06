
window.onload=()=>{
    iniciarBtn=document.getElementById("iniciar");
    pausarBtn=document.getElementById("pausar");
    reiniciarBtn=document.getElementById("reiniciar");
    minutos=document.getElementById("minutos");
    segundos=document.getElementById("segundos");

    contador_m=0
    contador_s=0

    iniciarBtn.addEventListener("click", iniciar);
    pausarBtn.addEventListener("click", pausar);
    reiniciarBtn.addEventListener("click", reiniciar);

    setInterval(() => {
        if (cronometrar==true){
            if(contador_s==60){
                contador_s=0;
                contador_m++;
            }
            if(contador_m==60){
                contador_m=0;
            }
            
            mostarTiempo();
    
            contador_s++;
        }
    }, 1000);

    cronometrar = false
}



function iniciar() {
    cronometrar = true
}

function pausar() {
    cronometrar = false
}

function reiniciar() {
    contador_m=0;
    contador_s=0;
    mostarTiempo();
}

function mostarTiempo(){
    if (contador_m<10){
        minutos.innerHTML="0"+contador_m;
    } else {
        minutos.innerHTML=contador_m;
    }
    if (contador_s<10){
        segundos.innerHTML="0"+contador_s;
    } else {
        segundos.innerHTML=contador_s;
    }   
}
