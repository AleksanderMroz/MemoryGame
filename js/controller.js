'use strict';
var controller = (function() {
  var isHighLight = false,
    startGame = function() {
      var initialNumberOfPieces = 4,
        items;

      submitChangeTime();
      submitChangeLifeAmmout();

      console.log("Zaczynamy gre - czas podswietlenia " + model.getHighLight());
      items = model.initGame();
      model.setLeftChances(model.getDeclaredMiss());
      lightThemOn();
      view.showHowManyToGuess(model.getHowManyToGuess());
      view.showLifes(model.getLeftChances());
      view.showKD(model.getKD());

      setTimeout(function() {
          regen();
        },
        model.getHighLight());
    },


    regen = function() {
      view.regenItem();
      model.setActive();
    },

    lightThemOn = function() {
      var number,
        i;
      number = model.getNumberOfItems();
      model.setUnActive();
      for (i = 0; i < number; i++) {
        if (model.getItem(i)) {
          view.lightItOn(i);
        }
      }
    },

    hit = function(event) {

      if (model.getActive()) {
        var element = event.target;
        var idTo = element.id;
        console.log("kafelka: " + idTo);

        if (model.getItem(idTo)) {
          console.log("Hit");
          view.sucessFullHit(element);
          model.setHited(idTo);
          view.showHowManyToGuess(model.getHowManyToGuess());
          view.showKD(model.getKD());

        } else {

          view.unsucessfullhit(element);
          model.setMissed();
          if (model.getLeftChances() > 0) {
            view.showLifes(model.getLeftChances());
          } else {
            view.showLifes("Last Chance - be carefull");
          }

          view.showKD(model.getKD());

          if (model.getLeftChances() <= -1) {
            view.showLifes("This is the End");
            model.setUnActive();
            setTimeout(function() {
              regen();
              startGame();
            }, 2000);
          }
        }


        if (model.checkIfGameIsEnded()) {
          model.setUnActive();
          setTimeout(function() {
            generateElement();
            regen();
            startGame();
          }, 2000);
        }
      }

    },
    generateElement = function() {
      model.addNumberOfItems();
      model.addLevel();
      view.addElement(hit);
      startGame();
    },

    submitChangeTime = function() {

      model.setHighLight(view.getNewHighLight());
    },
    submitChangeLifeAmmout = function() {

      model.setDeclaredMiss(view.getNewLifesAmmout());
    };



  return {
    startGame: startGame,
    hit: hit,
    generateElement: generateElement,
    regen: regen,
    lightThemOn: lightThemOn,
    submitChangeTime: submitChangeTime,
    submitChangeLifeAmmout: submitChangeLifeAmmout
  }

})();
