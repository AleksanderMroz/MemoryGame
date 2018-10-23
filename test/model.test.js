describe('Model', function() {



  it('Should Modify Number of Items ', function() {
    var n1,
      n2;
    //given
    model.initGame();
    model.resetModel();

    //when
    model.startGame();
    n1 = model.getNumberOfItems();
    model.addNumberOfItems();
    n2 = model.getNumberOfItems();

    //then
    expect(n1).toBe(4);
    expect(n2).toBe(5);
  });

  it('Should Manipulate Levels', function() {

    var n1,
      n2;

    //given
    model.startGame();
    model.initGame();
    model.resetModel();

    //when
    n1 = model.getLevel();
    n2 = model.addLevel();

    //then
    //expect(true).toBe(true);
    expect(n1).toBe(1);
    expect(n2).toBe(2)
  });

  it('Should Manipulate HighLight Times', function() {

    var n1,
      n2;

    //given
    model.startGame();
    model.initGame();
    model.resetModel();

    //when
    n1 = model.getHighLight();
    model.setHighLight(4);
    n2 = model.getHighLight();


    //then
    //expect(true).toBe(true);
    expect(n1).toBe(1000);
    expect(n2).toBe(4000)
  });

  it('Should Manipulate ItemsToGuess', function() {

    var n1,
      n2,
      items = [];
    //given
    model.startGame();
    model.initGame();
    model.resetModel();

    //when
    n1 = model.getHowManyToGuess();
    model.setNumberOfItems(300);
    model.initGame();
    n2 = model.getHowManyToGuess();
    //then
    expect(n1).toBe(1);
    expect(n2).toBeGreaterThan(10);

  });

  it('Should Manipulate LeftChances', function() {

    var n1,
      n2,
      items = [];
    //given
    model.startGame();
    model.initGame();
    model.resetModel();

    //when
    n1 = model.getLeftChances();
    model.setLeftChances(20);
    n2 = model.getLeftChances();
    //then
    expect(n1).toBe(0);
    expect(n2).toBe(20);
  });

  it('Should Manipulate HitsAndMisses', function() {

    var n1,
      n2,
      items = [];
    //given
    model.startGame();
    items = model.initGame();


    //when
    model.setHited(0);
    model.setHited(1);
    model.setHited(2);
    model.setMissed();
    n1 = model.getKD();

    //then
    expect(n1).toBe(75);
  });

  it('Should Manipulate With Board Size', function() {
    var n1,
      n2,
      items = [];
    //given
    model.startGame();

    //when
    model.setNumberOfItems(300);
    model.initGame();
    items = model.getGameBoard();
    n1 = items.length;

    //then
    expect(true).toBe(true);
    expect(n1).toBe(300);
  });

  it('Should Manipulate With Board State', function() {
    var shouldBeTrue,
      shouldBeFalse,
      shouldBeFalseAgain;
    //given
    model.startGame();
    model.initGame();
    //when
    model.setUnActive();
    shouldBeFalse = model.getActive();

    model.setActive();
    shouldBeTrue = model.getActive();

    model.setUnActive();
    shouldBeFalseAgain = model.getActive();

    //then
    expect(true).toBe(true);
    expect(shouldBeFalse).toBe(false);
    expect(shouldBeFalseAgain).toBe(false);
    expect(shouldBeTrue).toBe(true);
  });


  it('Negative Aspect - error Exception', function() {
    var shouldBeTrue,
      shouldBeFalse,
      shouldBeFalseAgain;
    //given
    model.startGame();
    model.initGame();
    //when

    //then()
    expect(false).toBe(false);
    expect(() => model.getItem(-2)).toThrowError(TypeError);
  });
});
