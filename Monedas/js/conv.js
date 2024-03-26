/*



    ,---,.                                 ,--,         ,-.
  ,'  .'  \                              ,--.'|     ,--/ /|
,---.' .' |                              |  | :   ,--. :/ |
|   |  |: |                              :  : '   :  : ' /                       .--.--.
:   :  :  /     .--,            ,--.--.  |  ' |   |  '  /      ,---.       .--, /  /    '
:   |    ;    /_ ./|           /       \ '  | |   '  |  :     /     \    /_ ./||  :  /`./
|   :     \, ' , ' :          .--.  .-. ||  | :   |  |   \   /    /  |, ' , ' :|  :  ;_
|   |   . /___/ \: |           \__\/: . .'  : |__ '  : |. \ .    ' / /___/ \: | \  \    `.
'   :  '; |.  \  ' |           ," .--.; ||  | '.'||  | ' \ \'   ;   /|.  \  ' |  `----.   \
|   |  | ;  \  ;   :          /  /  ,.  |;  :    ;'  : |--' '   |  / | \  ;   : /  /`--'  /
|   :   /    \  \  ;         ;  :   .'   \  ,   / ;  |,'    |   :    |  \  \  ;'--'.     /
|   | ,'      :  \  \        |  ,     .-./---`-'  '--'       \   \  /    :  \  \ `--'---'
`----'         \  ' ;         `--`---'                        `----'      \  ' ;
                `--`                                                       `--`
*/


function  ConvertidorMonedas(){
    var cantidad = parseFloat(document.getElementById("cantidad").value);
    var monedaOrigen = document.getElementById("de").value;
    var monedaDestino = document.getElementById("a").value;

    const monedas = {
        "dolar": 1,
        "euro": 0.92,
        "yen": 151,
        "pesoMx":16,
        "yuan": 7.21
    };
    document.getElementById("CerrarVentana").addEventListener("click",cerrarVentana);
    var elementoVentas= document.getElementById("window-notice");
    document.getElementById("ResultadoCovercion").textContent="El resultado es: " + cantidad * monedas[monedaDestino] / monedas[monedaOrigen];
    elementoVentas.style.display = "flex";

}
 function cerrarVentana(){
    var elementoVentas= document.getElementById("window-notice");
    elementoVentas.style.display = "none";
}



function limpiarDatosFormulario(){
    document.getElementById("cantidad").value="";
    document.getElementById("de").value="";
    document.getElementById("a").value="";
}