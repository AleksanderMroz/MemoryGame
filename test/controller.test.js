describe('Controller', function() {

  beforeEach(function() {
    model.startGame();

  });

  it('should test if tests starts', function() {

    expect(true).toBe(true);
  });

  it('should start game', function() {
    //given
    var items = [];


    spyOn(model, 'initGame');
    spyOn(model, 'addLevel');
    spyOn(model, 'getDeclaredMiss');
    spyOn(model, 'getNumberOfItems');
    spyOn(model, 'setUnActive');
    spyOn(model, 'setLeftChances');
    spyOn(model, 'getLeftChances');
    spyOn(model, 'getKD');
    spyOn(model, 'getHighLight');
    spyOn(model, 'setHighLight');
    spyOn(model, 'setDeclaredMiss');
    spyOn(model, 'getItem');
    spyOn(model, 'getHowManyToGuess').and.returnValue(1);
    spyOn(view, 'showHowManyToGuess');
    spyOn(view, 'showLifes');
    spyOn(view, 'showKD');
    spyOn(view, 'getNewHighLight');
    spyOn(view, 'getNewLifesAmmout');
    spyOn(view, 'lightItOn');

    spyOn(controller, 'lightThemOn');

    //when
    controller.startGame();

    //then
    expect(model.initGame).toHaveBeenCalled();
    expect(model.setLeftChances).toHaveBeenCalled();
    expect(view.showHowManyToGuess).toHaveBeenCalledWith(1);
    expect(view.showLifes).toHaveBeenCalled();
    expect(view.showKD).toHaveBeenCalled();
    expect(model.getLeftChances).toHaveBeenCalled();
  });

  it('should checkIfIts hitted will be green', function() {
    // given
    var items = [],
      itemsToGuess = 0;


    spyOn(model, 'getActive').and.returnValue(true);
    spyOn(model, 'getItem').and.returnValue(true);
    spyOn(model, 'setHited');
    spyOn(view, 'showHowManyToGuess');
    spyOn(view, 'showKD');
    spyOn(view, 'sucessFullHit');
    //when
    controller.hit(event);


    //then
    expect(model.getActive).toHaveBeenCalled();
    expect(model.setHited).toHaveBeenCalled();
    expect(view.sucessFullHit).toHaveBeenCalled();
  });

  it('should checkIfIts hitted will be red', function() {
    // given
    var items = [],
      itemsToGuess = 0;


    spyOn(model, 'getActive').and.returnValue(true);
    spyOn(model, 'getItem').and.returnValue(false);
    spyOn(model, 'setHited');
    spyOn(model, 'setMissed');


    spyOn(view, 'showHowManyToGuess');
    spyOn(view, 'showKD');
    spyOn(view, 'sucessFullHit');
    spyOn(view, 'unsucessfullhit');

    spyOn(view, 'showLifes')
      //when
    controller.hit(event);


    //then
    expect(model.getActive).toHaveBeenCalled();

    expect(model.setHited).not.toHaveBeenCalled();
    expect(model.setMissed).toHaveBeenCalled();

    expect(view.sucessFullHit).not.toHaveBeenCalled();
    expect(view.unsucessfullhit).toHaveBeenCalled();
  });

  it('should hit Wrong And End Game', function() {
    // given
    var items = [],
      itemsToGuess = 0;



    spyOn(model, 'getActive').and.returnValue(true);
    spyOn(model, 'getItem').and.returnValue(false);
    spyOn(model, 'setHited');
    spyOn(model, 'setMissed');
    spyOn(model, 'getLeftChances').and.returnValue(-1);
    spyOn(model, 'setUnActive');
    spyOn(model, 'checkIfGameIsEnded');


    spyOn(view, 'showHowManyToGuess');
    spyOn(view, 'showKD');
    spyOn(view, 'sucessFullHit');
    spyOn(view, 'unsucessfullhit');

    spyOn(view, 'showLifes');

    spyOn(controller, 'startGame');
    spyOn(controller, 'regen');


    //when
    controller.hit(event);


    //then
    expect(model.getActive).toHaveBeenCalled();
    expect(model.setMissed).toHaveBeenCalled();
    expect(view.unsucessfullhit).toHaveBeenCalled();
    expect(model.setUnActive).toHaveBeenCalled();
  });


  it('Should Create Table With 4 pieces', function() {
    // given
    var items = [],
      len = 0;

    // when
    items = model.initGame();
    len = items.length;
    //then
    expect(len).toBe(4);
  });



  it('Should change amount of spare lifes', function() {
    // given
    var items = [],
      lifesBeforeChange,
      lifesAfterChange;

    // when
    items = model.initGame();

    lifesBeforeChange = model.getLeftChances();
    model.setDeclaredMiss(5);
    model.setLeftChances(model.getDeclaredMiss());
    lifesAfterChange = model.getLeftChances();

    //then;
    expect(lifesBeforeChange).toBe(0);
    expect(lifesAfterChange).toBe(5);
  });

  it('Should Generate New Item', function() {
    // given
    var items = [],
      itemsBeforeChange,
      itemsAfterChange;

    // when
    spyOn(model, 'addNumberOfItems');
    spyOn(model, 'addLevel');
    spyOn(view, 'addElement');
    spyOn(controller, 'startGame');

    spyOn(model, 'initGame');
    spyOn(model, 'getDeclaredMiss');
    spyOn(model, 'getNumberOfItems');
    spyOn(model, 'setUnActive');
    spyOn(model, 'setLeftChances');
    spyOn(model, 'getLeftChances');
    spyOn(model, 'getKD');
    spyOn(model, 'getHighLight');
    spyOn(model, 'setHighLight');
    spyOn(model, 'setDeclaredMiss');
    spyOn(model, 'getItem');
    spyOn(model, 'getHowManyToGuess').and.returnValue(1);
    spyOn(view, 'showHowManyToGuess');
    spyOn(view, 'showLifes');
    spyOn(view, 'showKD');
    spyOn(view, 'getNewHighLight');
    spyOn(view, 'getNewLifesAmmout');
    spyOn(view, 'lightItOn');

    spyOn(controller, 'lightThemOn');

    items = model.initGame();
    controller.generateElement();
    //then;
    expect(model.addNumberOfItems).toHaveBeenCalled();
    expect(model.addLevel).toHaveBeenCalled();
    expect(view.addElement).toHaveBeenCalled();
  });


  it('Submit Change Time', function() {
    // given


    spyOn(model, 'setHighLight');
    spyOn(view, 'getNewHighLight');

    // when
    controller.submitChangeTime();
    //then;
    expect(model.setHighLight).toHaveBeenCalled();
  });

  it('Submit Change Life Ammount', function() {
    // given
    spyOn(model, 'setDeclaredMiss');
    spyOn(view, 'getNewLifesAmmout');

    // when
    controller.submitChangeLifeAmmout();
    //then;
    expect(model.setDeclaredMiss).toHaveBeenCalled();
  });

  it('Should Regen View', function() {
    // given
    spyOn(model, 'setActive');
    spyOn(view, 'regenItem');

    // when
    controller.regen();
    //then;
    expect(model.setActive).toHaveBeenCalled();
  });

  it('Should Light All Items Which Are Supposed To Be Guessed', function() {
    // given
    spyOn(model, 'setUnActive');
    spyOn(model, 'getNumberOfItems').and.returnValue(5);
    spyOn(model, 'getItem').and.returnValue(true);

    spyOn(view, 'regenItem');
    spyOn(view, 'lightItOn');

    // when
    controller.lightThemOn();


    //then;
    //expect(true).toBe(true);
    expect(view.lightItOn).toHaveBeenCalled();
    //expect(model.setActive).toHaveBeenCalled();
  });

  it('Should NOT Light All Items Which Are Supposed To Be Guessed',
    function() {
      // given
      spyOn(model, 'setUnActive');
      spyOn(model, 'getNumberOfItems').and.returnValue(5);
      spyOn(model, 'getItem').and.returnValue(false);

      spyOn(view, 'regenItem');
      spyOn(view, 'lightItOn');

      // when
      controller.lightThemOn();


      //then;
      expect(true).toBe(true);
      expect(view.lightItOn).not.toHaveBeenCalled();
      //expect(model.setActive).toHaveBeenCalled();
    });



});
