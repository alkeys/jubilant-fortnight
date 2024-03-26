function Adivinar() {
    var ValorRamdon = Math.floor((Math.random() * 100));
    console.log("Valor generado", ValorRamdon)
    var numeroIngresado = document.getElementById("NumeroIngesado").value;
    var CantVeces = document.getElementById("CatidadInt").value;
    CantVeces++;
    document.getElementById("CatidadInt").value = CantVeces;
    console.log(CantVeces)
    if (numeroIngresado == ValorRamdon) {
        var elementoVentas = document.getElementById("window-notice");
        document.getElementById("CerrarVentana").addEventListener("click", cerrarVentana);
        elementoVentas.style.display = "flex";
        document.getElementById("CantVecesGa").textContent = "Te tardaste la cantidad de veces de " + CantVeces;

        //borra dotos los datos
        document.getElementById("NumeroIngesado").value=0;
        document.getElementById("CatidadInt").value=0;
    }
}


function cerrarVentana() {
    var elementoVentas = document.getElementById("window-notice");
    elementoVentas.style.display = "none";
}

