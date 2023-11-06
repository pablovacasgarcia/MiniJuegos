window.onload=()=>{
    palabras=["pollo", "jugar", "ahorcado", "vaca"]

    palabraDiv=document.getElementById("palabra");
    palabraSpan=document.getElementById("palabraSpan");
    intentosP=document.getElementById("intentos");
    letras=document.querySelectorAll("button");
    cuerpo=document.querySelector("body");
    
    for (let i=0; i<24; i++){
        letras[i].addEventListener("click", comprobarLetra)
    }

    empezar()
}

function empezar(){
    cuerpo.style.backgroundColor="aliceblue";
    palabraSpan.innerHTML="";
    for (let i=0; i<24; i++){
        letras[i].disabled=false
    }

    aleatorio=Math.floor(Math.random() * palabras.length);

    palabra=palabras[aleatorio];

    for (let i=0; i<palabra.length; i++){
        palabraSpan.innerHTML+="_ ";
    }

    palabra=palabra.split("");

    intentos=palabra.length
    intentosP.innerHTML="Intentos: "+intentos;

}

function comprobarLetra(){
    letra=this.textContent;

    progreso=palabraSpan.textContent.split(" ");

    encontrado=false;

    for (let i=0; i<palabra.length; i++){
        if(palabra[i]==letra){
            progreso[i]=letra
            encontrado=true;
        } else {
            this.disabled=true;
        }
        
    }
    progreso=progreso.join(" ")

    console.log(progreso)
    palabraSpan.innerHTML=progreso;

    if(encontrado==false){
        intentos--;
        intentosP.innerHTML="Intentos: "+intentos;
    }

    if(progreso.replace(/\s/g, "")==palabra.join("")){
        palabraSpan.innerHTML="¡Enhorabuena!<button id='reiniciar' >Volver a jugar</button>";
        
        cuerpo.style.backgroundColor="aquamarine";
        
        reiniciar=document.getElementById("reiniciar");
        reiniciar.addEventListener("click", empezar)
    } else if (intentos==0){
        palabraSpan.innerHTML="¡Te has quedado sin intentos!<button id='reiniciar' >Volver a jugar</button>";
        
        cuerpo.style.backgroundColor="crimson";
        
        reiniciar=document.getElementById("reiniciar");
        reiniciar.addEventListener("click", empezar)
    }
}