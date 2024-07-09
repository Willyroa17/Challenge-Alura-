function encriptar() {
    let texto =document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo mensaje");
    let parrafo = document.getElementById("parrafo");
    let cifrar = document.getElementById ("cifrar");

    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "ines")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

 if (texto.length != 0) {
   document.getElementById("texto").value = textoCifrado;
   tituloMensaje.textContent = "Texto Encriptado Exitosamente";
   parrafo.textContent = "";
   cifrar.src = "./img/cifrar.png";
 } else {
   cifrar.src = "./img/decifrar.png";
   // document.getElementById ("cifrar").src = "./img/cifrar.png";
   tituloMensaje.textContent = "Ningun mensaje fue encontrado";
   parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
   swal("Opss!","Debes ingresar texto", "warning");
} 
}

function desencriptar() {
    let texto =document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo mensaje");
    let parrafo = document.getElementById("parrafo");
    let cifrar = document.getElementById ("cifrar");

   let textoCifrado = texto
                        .replace(/enter/gi, "e")
                        .replace(/ines/gi, "i")
                        .replace(/ai/gi, "a")
                        .replace(/ober/gi, "o")
                        .replace(/ufat/gi, "u"); 

if (texto.length != 0) {
   document.getElementById("texto").value = textoCifrado;
   tituloMensaje.textContent = "Texto Desencriptado Exitosamente";
   parrafo.textContent = "";
   cifrar.src = "./img/decifrar.png";
} else {
   cifrar.src = "./img/decifrar.png";
// document.getElementById ("cifrar").src = "./img/cifrar.png";
   tituloMensaje.textContent = "Ningun mensaje fue encontrado";
   parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
   swal("Opss!","Debes ingresar texto", "warning");

}
}