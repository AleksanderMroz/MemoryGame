var Item = function(itemNumber) {
  this.toGuess = false;
  this.itemNumber = itemNumber;
};



var model = (function() {

  var initNumberOfItems = 4,
    level = 1,
    currentNumberOfItems = 4,
    highlightTime = 1000,
    unknownItems,
    isActive,
    numberOfRemainedItemsToGuess,
    gameboard,
    shots = 0,
    hits = 0,
    leftMisses = 0,
    declaredMissed = 0;


  startGame = function(config) {
      if (config && config.numberOfItems) {
        currentNumberOfItems = config.numberOfItems;
      } else {
        currentNumberOfItems = initNumberOfItems;
      }
    },

    initGame = function() {
      var i,
        items = [];
      for (i = 0; i < getNumberOfItems(); i++) {
        items.push(new Item(i));
      }

      setItemsToGuess(items);
      gameboard = items;
      return items;
    },


    setHited = function(idTo) {
      gameboard[idTo].toGuess = false;
      numberOfRemainedItemsToGuess = numberOfRemainedItemsToGuess - 1;
      hits = hits + 1;
      shots = shots + 1;
    },

    setMissed = function() {
      shots = shots + 1;
      if (leftMisses > -1)
        leftMisses = leftMisses - 1;
    },

    getKD = function() {
      if (shots == 0)
        return 100;
      else {
        return hits / shots * 100;
      }

    },

    checkIfGameIsEnded = function() {
      return numberOfRemainedItemsToGuess == 0;

    },

    setItemsToGuess = function(items) {
      var numberOfSetIndex = 0;
      var indexOfIndexToGuess;
      while (numberOfSetIndex < items.length / 2 - 1) {
        index = createRandomNumber(items.length);
        if (items[index].toGuess == false) {
          items[index].toGuess = true;
          numberOfSetIndex++;
        }
      }
      numberOfRemainedItemsToGuess = numberOfSetIndex;
    },
    createRandomNumber = function(x) {
      to = Math.random() * (x - 1);
      return Math.floor(to);
    },
    getHighLight = function() {
      return highlightTime;
    },
    setHighLight = function(x) {
      highlightTime = x * 1000;
    },
    getNumberOfItems = function() {
      return currentNumberOfItems;
    },
    getLevel = function() {
      return level;
    },
    addNumberOfItems = function() {
      return currentNumberOfItems = currentNumberOfItems + 1;
    },
    setNumberOfItems = function(x) {
      currentNumberOfItems = x;
    },

    addLevel = function() {
      return level = level + 1;
    },
    getGameBoard = function() {
      return gameboard;
    },
    getItem = function(id) {
      return gameboard[id].toGuess;
    },

    getActive = function() {
      return isActive;
    },
    setActive = function() {
      return isActive = true;
    },
    setUnActive = function() {
      return isActive = false;
    },

    getHowManyToGuess = function() {
      console.log(numberOfRemainedItemsToGuess);
      return numberOfRemainedItemsToGuess;
    },

    setLeftChances = function(toSet) {

      leftMisses = toSet;
    },

    getDeclaredMiss = function() {
      return declaredMissed;

    },
    setDeclaredMiss = function(newDeclaredMiss) {
      declaredMissed = newDeclaredMiss;

    },



    getLeftChances = function() {

      return leftMisses;
    }

  resetModel = function() {
    initNumberOfItems = 4,
      level = 1,
      currentNumberOfItems = 4,
      highlightTime = 1000,
      unknownItems,
      isActive,
      numberOfRemainedItemsToGuess,
      gameboard,
      shots = 0,
      hits = 0,
      leftMisses = 0,
      declaredMissed = 0;
  }



  return {
    'getNumberOfItems': getNumberOfItems,
    'addNumberOfItems': addNumberOfItems,
    'addLevel': addLevel,
    'getLevel': getLevel,
    'getHighLight': getHighLight,
    'setHighLight': setHighLight,
    'initGame': initGame,
    'setItemsToGuess': setItemsToGuess,
    'createRandomNumber': createRandomNumber,
    'getItem': getItem,

    'getGameBoard': getGameBoard,
    'setNumberOfItems': setNumberOfItems,
    'setHited': setHited,
    'setMissed': setMissed,
    'checkIfGameIsEnded': checkIfGameIsEnded,
    'getActive': getActive,
    'setActive': setActive,
    'setUnActive': setUnActive,
    'getHowManyToGuess': getHowManyToGuess,
    'getKD': getKD,
    'getLeftChances': getLeftChances,
    'setLeftChances': setLeftChances,
    'getDeclaredMiss': getDeclaredMiss,
    'setDeclaredMiss': setDeclaredMiss,
    'resetModel': resetModel,
    'startGame': startGame


  }


})();
