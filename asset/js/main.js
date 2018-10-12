let container;

container =  document.getElementById("c1");

container.innerHTML = "Hola Mundo";
container.style.backgroundColor ="#000000";
container.style.color= "#1cb723";
container.style.width = "200px";
container.style.height = "200px";

container.innerHTML = "<input type=”text” placeholder=’escriba su texto’>";

let containers = document.getElementsByClassName("c2");

for (let i = 0; i<containers.length; i++){
    containers[i].style.backgroundColor = "#009999";
    containers[i].innerHTML = "<input type='text' placeholder='Escriba su texto'>";
}

let boton = document.getElementById("btn-click");
    btnCopy = document.getElementById("btnCopy");
    
    
boton.onclick = evt => alert("Hola Mundo");
btnCopy.onclick = evt => {
    let msj = document.getElementById('textMsj').value;
    document.getElementById('showMsj').innerText = msj;
}