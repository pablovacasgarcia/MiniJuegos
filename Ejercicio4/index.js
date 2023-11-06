window.onload=()=>{
    añadir=document.getElementById("añadir");
    lista=document.getElementById("lista");
    input=document.getElementById("input");
    
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            añadirLi();
        }
    });
    añadir.addEventListener("click", añadirLi);
    
}

function añadirLi(){
    if (input.value!=""){
        li=document.createElement("li");
        li.innerHTML="<span>"+input.value+'</span><img src="img/editar.png" alt="editar" id="editar"><img src="img/delete.png" alt="borrar" id="borrar">';
        lista.appendChild(li);
        borrar = li.querySelector("#borrar");
        borrar.addEventListener("click", borrarLi);
        editar = li.querySelector("#editar");
        editar.addEventListener("click", editarLi);
    }
    
    input.value="";
}

function editarLi(){
    const li = this.parentNode; // Get the parent list item
    const text = li.querySelector("span"); // Assuming the text is wrapped in a <span> element
    const editInput = document.createElement("input"); // Create an input element
    editInput.value = text.textContent; // Set the input's value to the current text
    li.replaceChild(editInput, text);
    const editarImg=li.querySelector('#editar');
    editarImg.style.display="none";
    editInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            text.textContent = editInput.value;
            li.replaceChild(text, editInput);
            editarImg.style.display="initial";
        }
    });
}

function borrarLi(e){
    var li = this.parentNode;
    li.parentNode.removeChild(li);
}