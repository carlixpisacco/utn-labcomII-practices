
function calculatePrice() {
    let total = 0;
    let listaCapacidad = document.getElementById('Capacidad');
    let capacidadUsuario = listaCapacidad.options[listaCapacidad.selectedIndex].text;
    let precio = parseInt(listaCapacidad.options[listaCapacidad.selectedIndex].value); //parseInt convierte cadena de texto en numero entero
    let cantidadUsuario = document.getElementById('cantidad').value;
    

    if (capacidadUsuario == "128") {
        total = precio * cantidadUsuario;
        console.log(total);

    } else if (capacidadUsuario == "256") {
        total = precio * cantidadUsuario;
        console.log(total);
    } else {
        total = precio * cantidadUsuario;
        console.log(total);
    }

    if (total == 0) {
        document.getElementById('result').innerHTML = ("ERROR debe elegir color, capacidad y cantidad para calcular la cotización");
    } else {
        document.getElementById('result').innerHTML = ("Resultado cotización: " + total);
    }


}