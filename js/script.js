var titulo = document.querySelector("#h3-js");
titulo.textContent = "Calculadora de Índice de Massa Corporal";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var PesoValido = true;

  var alturaValida = true;


  if (peso <= 0 || peso >= 600) {
      PesoValido = false;
      alert("Peso inválido");
      console.log("Peso inválido");
      paciente.style.backgroundColor = "lightcoral";
  }

  if (altura < 0.50 || altura > 3) {
    alturaValida = false;
    alert("Altura inválida");
    console.log("Altura inválida");
    paciente.style.backgroundColor = "lightcoral";
  }

  if (alturaValida && PesoValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);

    console.log(imc);
  }

}








