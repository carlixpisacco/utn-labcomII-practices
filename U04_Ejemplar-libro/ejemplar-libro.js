
function enviar() {
    let codigoLibro = document.getElementById('codigo').value;
    let nombreLibro = document.getElementById('nombre').value;
    let tipoLibro = document.getElementById("tipo");
    let tipoLibroValor = tipoLibro.options[tipoLibro.selectedIndex].value;
    let editorialLibro = document.getElementById("editorial").value;
    let anoLibro = document.getElementById("año").value;
    let autorLibro = document.getElementById('autor').value;

    if (codigoLibro == "" || nombreLibro == "" ||  tipoLibroValor == "0" || editorialLibro == "" || anoLibro == "" || autorLibro ==""){
        alert("ERROR algunos de los campos no fue completado")
    } else {
        alert("Los datos fueron enviados con éxito")
    }
}
    function limpiar() {
        document.getElementById('codigo').value = "";
        document.getElementById('nombre').value ="";
        let tipoLibro = document.getElementById("tipo");
        tipoLibro.selectedIndex= 0;
        document.getElementById("editorial").value = "";
        document.getElementById("año").value = "";
        document.getElementById('autor').value = "";
    }