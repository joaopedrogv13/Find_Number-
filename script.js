var numberToFind = 0;
var attemps = 0;

function refresh() {
    // Obtém um número aleatório
    attemps = 0;
    numberToFind = parseInt(Math.random() * 100);
}


function verifyNumber() {
  var bet = document.getElementById("bet");
  var betValue = bet.value;

  if (betValue > 100 || betValue < 1 || isNaN(betValue)) {
    alert("Aposta Inválida!");
    bet.value = "";
    bet.focus();
    return;
  }

    if(betValue == numberToFind){
    document.body.style.backgroundImage = "url('images/img.jpeg')";

    }

  if (betValue < numberToFind) {
    alert("🚨 O número a ser encontrado é MAIOR!");
    attemps++;
  } else if (betValue > numberToFind) {
    alert("🚨 O número a ser encontrado é MENOR!");
    attemps++;
  } else {
    window.alert("🥳 Parabéns! Você acertou com " + attemps + " erros!");
    refresh();
  }

  bet.value = "";
  bet.focus();
}

// Faz o Enter acionar a função
document.getElementById("bet").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    verifyNumber();
  }
});

refresh();
