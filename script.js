
function criarBlocos() {
  const jogo = document.querySelector("#jogo");
  jogo.innerHTML = "";

  /// Função gerar///
  const bttGerar = document.querySelector("#bttGerar");

  //// Função reiniciar ///
  bttGerar.innerHTML = "Reiniciar";
  bttGerar.onclick = function() {
    alert("Esse jogo esta sendo reiniciado ");
    criarBlocos();
    resetCounter();
  };

  /// Embaralhando os blocos ////
  var corretos = Array.from({ length: 1 }, () => Math.floor(Math.random(4) * (5)));
  var cartas = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
  var cartas = numerosCartas();
  cartas = shuffle(cartas);
  console.log(numerosCartas());

  let gtc = "";
  let codCell = 0;
  for (let c = 0; c < 4 * 5; c++) {

    /// Aparência dos botões ///
    for (let k = 0; k < 1; k++) {
      const bloco = document.createElement("div");
      bloco.classList.add('box');
      bloco.value = cartas[codCell];
      bloco.style.backgroundImage = "url('./imgs/interrogacao.png')";
      bloco.style.backgroundSize = "contain";
      bloco.setAttribute("id", k);


      /// Funções if, else if  dos botões ///

      /// Corretos if ///
      bloco.addEventListener("click", function() {
        if (corretos.includes(this.value)) {
          this.style.backgroundColor = "green";
          alert("Parabéns você ganhou!!!");
          alert("Este jogo será reiniciado");
          document.location.reload(true);
        }
        //// Vermelhos else if ////      
        else if (corretos.includes) {
          this.style.backgroundColor = "red";
          alert("Você errou, tente novamente!");
          //removePoint()
          //alert("!!! VOCÊ TEM " + point + " CHANCES !!!");
          //limitClick();
        }

        incrementClick() = document.querySelector("#incrementClick()");
        incrementClick().innerHTML = this.value;

      });


      /// Click do mouse ///
      bloco.addEventListener("mouseover", function() {
        this.style.border = "3px solid orange";
      });

      bloco.addEventListener("mouseout", function() {
        this.style.border = "";
      });

      jogo.appendChild(bloco);

      codCell++;
    }
    gtc = gtc + " auto";
  }

  /// Reiniciando o jogo ///
  function bttGerarHandler() {
    alert("Esse jogo foi reiniciado");
  }
  jogo.style.gridTemplateColumns = gtc;

}



/// Misturar elementos ///
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

/// Numero de botões ///
function numerosCartas(q) {

  const array = [];
  var j = 0;
  for (let valor = 0; valor < 4 * 5; valor++) {
    array[j] = valor;
    j = j + 1;

  }
  return array;
}

/// Incrementar e  resetar o valor ///
var counterVal = 0;

function incrementClick() {
  updateDisplay(++counterVal);

}

function limitClick() {
  if (counterVal >= 4) {
    alert("Suas chances acabaram, tente de novo.")
    document.location.reload(true);
  }
}

function updateDisplay(val) {
  document.getElementById("counter-label").innerHTML = val;
}

/// Pontuação ///
var point = 5;

function removePoint() {
  updateDisplay(--point);
}
