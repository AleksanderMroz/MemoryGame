'use strict';
var view = (function() {
  var sucessFullHit = function(element) {
      element.className = 'generated-item';
      element.classList.add('green');

      //element.innerHTML = 'o';
    },


    unsucessfullhit = function(element) {
      element.className = 'generated-item';
      element.classList.add('red');
      //element.innerHTML = 'x';
    },

    regenItem = function() {
      var div,
        i,
        max;
      max = document.getElementsByClassName('generated-item').length;
      div = document.getElementsByClassName('generated-item');

      for (i = 0; i < max; i++) {
        div[i].className = 'generated-item';
        div[i].classList.add('gray');
      }
    },

    lightItOn = function(id) {
      var div;
      div = document.getElementById(id);
      div.className = 'generated-item';
      div.classList.add('blue');

    },

    addElement = function(onClickFunction) {
      var div = document.createElement("DIV"),
        lastRow = document.getElementById('generated-elements');
      div.onclick = onClickFunction;
      div.className = 'generated-item';
      div.id = document.getElementsByClassName('generated-item').length;
      lastRow.appendChild(div);
    },
    showHowManyToGuess = function(howToGest) {
      document.getElementById("howMuch").innerText =
        howToGest;
    },

    showKD = function(howToGest) {
      document.getElementById("KD").innerText =
        howToGest;
    },

    showLifes = function(lifes) {
      document.getElementById("Lifes").innerText =
        lifes;
    },

    getNewHighLight = function() {


      var newTime;
      newTime = document.getElementById("new-highlightTime").value;
      if (newTime > 0.1) {
        return newTime;
      } else {
        return 0.1;
      }
    },


    getNewLifesAmmout = function() {
      var newLifes;
      newLifes = document.getElementById("new-Missed").value;
      if (newLifes > -1) {
        return newLifes;
      } else {
        return 0;
      }
    }



  return {
    sucessFullHit: sucessFullHit,
    unsucessfullhit: unsucessfullhit,
    addElement: addElement,
    regenItem: regenItem,
    lightItOn: lightItOn,
    showHowManyToGuess: showHowManyToGuess,
    getNewHighLight: getNewHighLight,
    showLifes: showLifes,
    showKD: showKD,
    getNewLifesAmmout: getNewLifesAmmout
  }
})();
