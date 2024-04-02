// document.getElementById('spin-btn').addEventListener('click', function() {

//     var ruleta = document.getElementById('ruleta');
//     var sectores = ruleta.getElementsByClassName('sector');
//     var cantidadSectores = sectores.length;
    
//     var gradosRotacion = Math.floor(Math.random() * 360) + 3600; // Girar entre 10 y 20 vueltas
    
//     var sectores = ["Rojo ", "Azul ", "Verde ", "Amarillo","Purpura","Naranja","Celeste"]; // Agrega todos los sectores que desees

//     var sectorGanadorIndex = Math.floor(Math.random() * sectores.length);

//     var sectorGanador = sectores[sectorGanadorIndex];
    
//     ruleta.style.transition = 'transform 3s ease-out'; // Transición para suavizar la rotación
//     ruleta.style.transform = `rotate(${gradosRotacion}deg)`;
    
//     setTimeout(function() {
//       alert('Ganador: ' + sectorGanador);
//     }, 3000); // Mostrar el ganador después de 3 segundos (coincide con la duración de la transición)

// });

function guardarRetos(){
    var reto_1 = document.getElementById("reto_1").value;
    var reto_2 = document.getElementById("reto_2").value;
    var reto_3 = document.getElementById("reto_3").value;
    var reto_4 = document.getElementById("reto_4").value;
    var reto_5 = document.getElementById("reto_5").value;
    var reto_6 = document.getElementById("reto_6").value;
    var reto_7 = document.getElementById("reto_7").value;
    var reto_8 = document.getElementById("reto_8").value;
    var reto_9 = document.getElementById("reto_9").value;
    var reto_10 = document.getElementById("reto_10").value;
    var reto_11 = document.getElementById("reto_11").value;
    var reto_12 = document.getElementById("reto_12").value;
    

    

    // console.log(reto1);
    
    cambiarRetos(reto_1,reto_2,reto_3,reto_4,reto_5,reto_6,reto_7,reto_8,reto_9,reto_10,reto_11,reto_12);

}

function cambiarRetos(reto_1,reto_2,reto_3,reto_4,reto_5,reto_6,reto_7,reto_8,reto_9,reto_10,reto_11,reto_12){
    var reto1 = document.getElementById("reto1");
    var reto2 = document.getElementById("reto2");
    var reto3 = document.getElementById("reto3");
    var reto4 = document.getElementById("reto4");
    var reto5 = document.getElementById("reto5");
    var reto6 = document.getElementById("reto6");
    var reto7 = document.getElementById("reto7");
    var reto8 = document.getElementById("reto8");
    var reto9 = document.getElementById("reto9");
    var reto10 = document.getElementById("reto10");
    var reto11 = document.getElementById("reto11");
    var reto12 = document.getElementById("reto12");
   


    reto1.textContent = reto_1;
    reto2.textContent = reto_2;
    reto3.textContent = reto_3;
    reto4.textContent = reto_4;
    reto5.textContent = reto_5;
    reto6.textContent = reto_6;
    reto7.textContent = reto_7;
    reto8.textContent = reto_8;
    reto9.textContent = reto_9;
    reto10.textContent = reto_10;
    reto11.textContent = reto_11;
    reto12.textContent = reto_12;
}





















function girar(){
    var ruleta = document.getElementById('ruleta');
    var gradosRotacion = Math.floor(Math.random() * 360) + 3600; // Girar entre 10 y 20 vueltas
    ruleta.style.transition = 'transform 3s ease-out'; // Transición para suavizar la rotación
    ruleta.style.transform = `rotate(${gradosRotacion}deg)`;

    var sectores = ["Rojo","Naranja","Amarillo","Verde Claro","Verde ", "Verde Agua", "Celeste", "Azul ","Purpura", "Morado","Fucsia", "Rosa"];
    var sectorGanadorIndex = Math.floor(Math.random() * sectores.length);
    var sectorGanador = sectores[sectorGanadorIndex];
    setTimeout(function() {
        verReto(sectorGanador);
    }, 3500);
}

function verReto(sectorGanador){
    var cuadro = document.createElement("div");
    var titulo = document.createElement("h2");
    var cerrar = document.createElement("input");
    var descripcion = document.createElement("p");
    var imagen = document.createElement("img");

    imagen.src = "huevo.svg";
    imagen.style.width = "100px";
   
    titulo.style.marginTop = "140px";
    descripcion.style.margin = "0px 50px 70px 50px";
    
    imagen.className = "imagen";
    cerrar.type = "submit";
    cerrar.className = "botonCerrar";
    cuadro.className = "cuadro";
    descripcion.textContent = "Este reto se trata sobre que tienes que comer huevos sin rechistar y tragarlos, cuando acabes y esperar a que no vomies, ganas!";
    titulo.textContent = sectorGanador;
    cerrar.value = "Cerrar";

    cuadro.appendChild(cerrar);
    cuadro.appendChild(titulo);
    cuadro.appendChild(descripcion);
    cuadro.appendChild(imagen);
    document.body.appendChild(cuadro);

    cerrar.addEventListener("click",function(){
        window.location.href = "ruleta.html";
    });
}


