window.onload=()=>{
    palabras = ["pollo", "jugar", "ahorcado", "vaca", "gato", "casa", "perro", "pelota", "luz", "mesa", "silla", "rojo", "azul", "verde", "amarillo", "manzana", "computadora", "musica", "libro", "caminar", "naranja", "jardin", "hoja", "teclado", "nube", "sol", "cielo", "montaña", "rio", "playa", "isla", "avion", "autobus", "tren", "coche", "bicicleta", "reloj", "tiempo", "papel", "foto", "guitarra", "piano", "juego", "escuela", "estudio", "arte", "foto", "tarjeta", "fruta", "leche", "pan", "queso", "fiesta", "fiesta", "alegre", "feliz", "triste", "llorar", "reir", "saltar", "correr", "nadar", "dormir", "soñar", "comer", "beber", "hablar", "escuchar", "leer", "escribir", "aprender", "enseñar", "viajar", "descubrir", "crear", "deporte", "jugar", "amigo", "amor", "familia", "hogar", "naturaleza", "ciencia", "historia", "musica", "arte", "poesia", "felicidad", "paz"]

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