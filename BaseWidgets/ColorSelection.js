'use strict';

function ColorSelection(blockCreator, blockFromElementCreator){
  this.$container = null;
  this.__blockCreator = blockCreator;
  this.__blockFromElementCreator = blockFromElementCreator;
  this.__$table = null;
  this.__$separator = null;
  this.__COLUMN_COUNT = 3;
}

ColorSelection.prototype.render = function(){
  this.$container = $('<div class="colorSelection">');
  $('<h2>').text('Выбранные цвета:').appendTo(this.$container);

  this.__$table = $('<table>').appendTo(this.$container);
  this.__addSeparator();
  this.__addNewElementRow();

  return this.$container;
};

ColorSelection.prototype.__addSeparator = function(){
  this.__$separator = $('<tr>').append(
      $('<td class="horizontalSeparator">')
        .attr('colspan', this.__COLUMN_COUNT));
  this.__$table.append(this.__$separator);
};

ColorSelection.prototype.__addNewElementRow = function(){
  var $tr = $('<tr>').appendTo(this.__$table);

  var $addButton = $('<input type="image" src="images/add.png">');
  var colorBlock = this.__blockCreator();
  /* В HTML5 появился специальный input type=color,
     но пока у меня нет возможности его протестировать */
  var $rgbInput = $('<input type="text" placeholder="Цвет">');

  this.__bindNewElementRowHandlers($addButton, colorBlock, $rgbInput);

  $('<td>').append($addButton).appendTo($tr);
  $('<td>').append(colorBlock.$container).appendTo($tr);
  $('<td>').append($rgbInput).appendTo($tr);
};

ColorSelection.prototype.__bindNewElementRowHandlers = function($addButton, colorBlock, $rgbInput){

  var inputSpec = function(){
    return new ColorSpec($rgbInput.val());
  }

  $rgbInput.blur(function(){ colorBlock.set(inputSpec()); });
  $addButton.click(bind(this, function(){ this.add(colorBlock.colorSpec); }));

  $rgbInput.keypress(bind(this, function(e){
    if (e.keyCode === 13 || e.charCode === 32){ /* Enter, Space */
      var colorSpec = inputSpec();
      colorBlock.colorSpec.equals(colorSpec)
        ? this.add(colorBlock.colorSpec)
        : colorBlock.set(colorSpec);
      return false;
    }
  }));
};

ColorSelection.prototype.add = function(colorSpec, removeCallback){
  var $tr = $('<tr>').insertBefore(this.__$separator);
  if (removeCallback)
    $tr.data('removeCallback', removeCallback);

  var $upButton = $('<input type="image" src="images/up.png">');
  var $downButton = $('<input type="image" src="images/down.png">');
  var $removeButton = $('<input type="image" src="images/remove.png">');
  $('<td class="controls">').append($upButton.add($downButton).add($removeButton)).appendTo($tr);

  $upButton.click(function(){ $tr.insertBefore($tr.prev()); });
  $downButton.click(bind(this, function(){ $tr.insertAfter($tr.next().not(this.__$separator)); }));
  $removeButton.click(function(){
    var removeCallback = $tr.data('removeCallback');
    if (removeCallback)
      removeCallback();
    $tr.remove();
  });

  var colorBlock = this.__blockCreator(colorSpec);
  $('<td>').append(colorBlock.$container).appendTo($tr);

  $('<td>').text(colorSpec.name).appendTo($tr);
};

ColorSelection.prototype.remove = function(colorSpec){
  var $trs = this.__$separator.prevAll();
  var $toRemove = $trs.filter(bind(this, function(_, tr){
    var $colorBlock = $(tr).children().eq(1).children();
    var colorBlock = this.__blockFromElementCreator($colorBlock);
    return colorBlock.colorSpec.equals(colorSpec);
  }));
  $toRemove.each(function(_, tr){
    var removeCallback = $(tr).data('removeCallback');
    if (removeCallback)
      removeCallback();
  });
  $toRemove.remove();
};
