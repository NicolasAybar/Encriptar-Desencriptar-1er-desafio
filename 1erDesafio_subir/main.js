function encriptar(){
    var x = document.getElementById("ocultarBoton");
    //const botonDesencriptarOk = document.getElementById('DesencriptarBoton');
    if(x.style.display === "none")
    {
        x.style.display = "none";
        //botonDesencriptarOk.disabled = true; 
    }else{
        x.style.display = "block";
        //botonDesencriptarOk.disabled = false; 
    }
    var frase = document.getElementById('texto1').value.toLowerCase();
        var texto1 = frase.replace(/e/img, 'enter');
        var texto1 = texto1.replace(/o/img, 'ober');
        var texto1 = texto1.replace(/i/img, 'imes');
        var texto1 = texto1.replace(/a/img, 'ai');
        var texto1 = texto1.replace(/u/img, 'ufat');

        document.getElementById('texto2').innerHTML = texto1;
        document.getElementById('texto1').value = "";
        }
function desencriptar(){
        var frase = document.getElementById('texto2').value.toLowerCase();

        var texto2 = frase.replace(/enter/img, 'e');
        var texto2 = texto2.replace(/ober/img, 'o');
        var texto2 = texto2.replace(/imes/img, 'i');
        var texto2 = texto2.replace(/ai/img, 'a');
        var texto2 = texto2.replace(/ufat/img, 'u');

        document.getElementById('texto2').innerHTML = texto2;
    }

function HabilitarDesencriptar(){
    var paraDesencriptarCadena = document.getElementById('texto2').value.toLowerCase();
    //habilitar boton desencriptar
    var p = document.getElementById("ocultarBotonDesencriptado");

    if(p.style.display === "none")
    {
        p.style.display = "none";
        //botonDesencriptarOk.disabled = true; 
    }else{
        p.style.display = "block";
        //botonDesencriptarOk.disabled = false; 
    }
}
