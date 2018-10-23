describe('View', function() {


  it('should Return True', function() {

    expect(true).toBe(true);
  });

  it('should add element', function() {
    //given
    let click = 'do this',
      id = 1,
      numberOfTilesBefore,
      numberOfTilesAfter,
      div1,
      div2;
    div1 = document.createElement('DIV');
    div2 = document.createElement('DIV');

    div2.id = 'new-tile';
    div1.appendChild(div2);
    numberOfTilesBefore = div2.childElementCount;
    spyOn(document, 'getElementById').and.returnValue(div2);


    //when
    view.addElement(click, id);
    numberOfTilesAfter = div2.childElementCount;
    //then

    expect(numberOfTilesAfter).not.toBe(numberOfTilesBefore);

  });

  it('should light element', function() {
    //given
    var id = 1,
      numberOfTilesBefore,
      numberOfTilesAfter,
      div,
      div2;
    div = document.createElement('DIV');
    div.classname = 'generated-item';
    div.id = 1;

    div2 = document.createElement('DIV');
    div2.classname = 'generated-item';
    div2.classList.add('blue');
    div2.id = 1;


    spyOn(document, 'getElementById').and.returnValue(div);


    //when
    view.lightItOn(id);

    expect(true).toBe(true);
    expect(div.className).toBe('generated-item blue');

  });

  it('should light element on correctHit', function() {
    //given
    var id = 1,
      numberOfTilesBefore,
      numberOfTilesAfter,
      div,

      div = document.createElement('DIV');
    div.classname = 'generated-item';
    div.id = 1;

    spyOn(document, 'getElementById').and.returnValue(div);


    //when
    view.sucessFullHit(div);

    expect(true).toBe(true);
    expect(div.className).toBe('generated-item green');

  });

  it('should light element on uncorrectHit', function() {
    //given
    var id = 1,
      numberOfTilesBefore,
      numberOfTilesAfter,
      div,

      div = document.createElement('DIV');
    div.classname = 'generated-item';
    div.id = 1;

    spyOn(document, 'getElementById').and.returnValue(div);


    //when
    view.unsucessfullhit(div);

    expect(true).toBe(true);
    expect(div.className).toBe('generated-item red');

  });


  it('should regen item - turn it grey', function() {
    //given
    var id = 1,
      numberOfTilesBefore,
      numberOfTilesAfter,
      div,
      items = [];

    div = document.createElement('DIV');
    div.classname = 'generated-item red';
    div.id = 1;

    items.push(div);


    spyOn(document, 'getElementsByClassName').and.returnValue(items);


    //when
    view.regenItem();

    expect(true).toBe(true);
    expect(div.className).toBe('generated-item gray');
  });



  it('get New Goood Values  from desktop', function() {
    //given
    var id = 1,
      ret,
      div;

    div = document.createElement('DIV');
    div.value = 2;

    spyOn(document, 'getElementById').and.returnValue(div);
    //when
    ret = view.getNewHighLight();

    //then
    expect(false).toBe(false);
    expect(ret).toBe(2);
  });

  it('get New Unreal Values  from desktop', function() {
    //given
    var id = 1,
      ret,
      div;

    div = document.createElement('DIV');
    div.value = -2;

    spyOn(document, 'getElementById').and.returnValue(div);
    //when
    ret = view.getNewHighLight();

    //then
    expect(true).toBe(true);
    expect(false).toBe(false);
    expect(ret).toBe(0.1);
  });



});
