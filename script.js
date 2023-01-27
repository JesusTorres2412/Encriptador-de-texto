const inputmensaje = document.querySelector(".text-area");
//const btnEncriptar = document.querySelector("#btn_encriptar");
const inputresultado = document.querySelector(".mensaje");
//const btnDesencriptar = document.querySelector("#btn-desencriptar");
//const btncopiar = document.querySelector("#btn-copiar");
var imagen1 = document.querySelector(".imagen1");
var msmnohaytexto = document.querySelector(".msmnohaytexto")

function encriptado() {
  ocultarImagen();
  var mensaje = inputmensaje.value;
  if (/[A,E,I,O,U,á-ú]/.test(mensaje)) {
    alert("Por favor, escriba sólo en minúsculas y sin acentos");
  }
   else {
    var mensajeEncriptado = mensaje
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");
    inputresultado.value = mensajeEncriptado;
  }
}


function desencriptado() {
  var mensajeEncriptado = inputmensaje.value;
  var mensaje = mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  inputresultado.value = mensaje;

}

function copiar() {
  var mensajeEncriptado = inputresultado.value;
  navigator.clipboard.writeText(mensajeEncriptado);
  alert("texto copiado")
}

function ocultarImagen() {
  imagen1.classList.add("ocultar");
  msmnohaytexto.classList.add("ocultar")


}

const btnEncriptar = document.querySelector('.btn_encriptar'); btnEncriptar.onclick = encriptado;
const btnDesencriptar = document.querySelector('.btn-desencriptar'); btnDesencriptar.onclick = desencriptado;
const btncopiar = document.querySelector('.btn-copiar'); btncopiar.onclick = copiar;
