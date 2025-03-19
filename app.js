// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el pro imputAmigo = document.getElementById("amigo");
let amigo= [];




function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo'); 
    let nombreAmigo = inputAmigo.value;  

    if(!nombreAmigo) {  
        alert("Debes ingresar un nombre"); 
        return; // el sistema para la ejecución del siguiente codigo

    }

    amigo.push(nombreAmigo); 
    inputAmigo.value = ""; 
    inputAmigo.focus();              
    renderizarAmigos();
};

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";   //limpiar la lista de amigos

    for (let i = 0; i < amigo.length; i++) {     
                                                 
         let item = document.createElement("li");  
         item.textContent = amigo[i];     
          listaAmigos.appendChild(item);

        }

}

function sortearAmigo() {

   if(amigo.length === 0) {  //comparacion extricta, tipo y valor igual. Si array es extrictamente igual a cero, debe decir que no hay amigos
      alert("No hay amigos para sortear");
      return;

   }

   let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)]; 
   let resultado = document.getElementById ("resultado");
   resultado.innerHTML = El amigo sorteado es: ${amigoSorteado}; 

   let limpiarLista = document.getElementById("listaAmigos");
   limpiarLista.innerHTML = "";

}
```