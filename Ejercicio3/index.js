window.onload=()=>{
    divs=document.querySelectorAll("div");
    reiniciar=document.getElementById("reiniciar");

    for(let i=0; i<divs.length; i++){
        divs[i].addEventListener("click", girar)
    }
    reiniciar.addEventListener("click", ()=>{location.reload(); jugar()});

    jugar();
    pulsados=0;
    primero=true;
}

function jugar(){
    array=[]
    reiniciar.style.display="none"

    for(let i=0; i<5; i++){
        array.push(i+"A");
        array.push(i+"B");
    }

    array=shuffle(array);

    for (let i=0; i<divs.length; i++){
        divs[i].id=array[i];
        divs[i].style.display="initial";
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function girar(e){
    div=e.target

    
    

    if(pulsados==0){
        if(!primero && pulsado1.id!="resuelto"){
            pulsado1.style.transform= "rotateY(-180deg)";
            pulsado1.removeChild(imagen1);
            pulsado2.style.transform= "rotateY(-180deg)";
            pulsado2.removeChild(imagen2);
        }

        primero=false;

        pulsados++;
        pulsado1=div;
        id1=pulsado1.id.split("")[0];

        pulsado1.style.transform= "rotateY(180deg)";

        imagen1=document.createElement("img");
        imagen1.src="img/"+id1+".png";
        div.appendChild(imagen1)

        div.removeEventListener("click", girar)
    } else if (pulsados==1){
        pulsado2=div;
        id2=pulsado2.id.split("")[0];

        pulsado2.style.transform= "rotateY(180deg)";

        imagen2=document.createElement("img");
        imagen2.src="img/"+id2+".png";
        div.appendChild(imagen2);

        if(id1==id2){
            console.log("son iguales")
            pulsado1.id="resuelto"
            pulsado2.id="resuelto"
            div.removeEventListener("click", girar)
            comprobarResuelto()
        } else {
            pulsado1.addEventListener("click", girar)
            pulsado2.addEventListener("click", girar)
        }

        pulsados=0;
    }

    
}

function comprobarResuelto(){
    resueltos=0;
    for(let i=0; i<divs.length; i++){
        if (divs[i].id=="resuelto"){
            resueltos++;
        }
    }

    if(resueltos==divs.length){
        for(let i=0; i<divs.length; i++){
            divs[i].style.display="none";
        }
        reiniciar.style.display="block"
    }

    
}