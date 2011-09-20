'use strict';

function SafeColorsTable(blockCreator){
  this.$container = null;
  this.__blockCreator = blockCreator;
  
  this.__directions = [
    /* по горизонтали меняется первая компонента цвета R */
    0,
    /* по вертикали меняется компонента B */ 
    2,
    /* когда перебор закончился, меняется компонента G */
    1 ];
  this.__componentValues = [0, 3, 6, 9, 'C', 'F'];
}

SafeColorsTable.prototype.render = function(){
  this.$container = $('<table class="colorTable">');
  var values = [0, 0, 0];
  this.__renderDirection2(values, this.$container);
  return this.$container;
};

SafeColorsTable.prototype.__renderDirection2 = function(values, $table){
  var trs = [];
  $.each(this.__componentValues, bind(this, function(i, direction2value){
    values[this.__directions[2]] = direction2value;
    if (i % 2 === 0){
      trs = [];
      if (i > 0)
        this.__addHorizontalSeparator($table);
    }
    else
      this.__addVerticalSeparator(trs);
    trs = this.__renderDirection1(values, $table, trs);
  }));
};

SafeColorsTable.prototype.__addHorizontalSeparator = function($table){
  $table.append(
    $('<tr>').append(
      $('<td class="horizontalSeparator">')
        .attr('colspan', this.__componentValues.length * 2 + 1)));
};

SafeColorsTable.prototype.__addVerticalSeparator = function(trs){
  $.each(trs, function(_, $tr){
    $tr.append('<td class="verticalSeparator">');
  });
};

SafeColorsTable.prototype.__renderDirection1 = function(values, $table, trs){
  $.each(this.__componentValues, bind(this, function(i, direction1value){
    values[this.__directions[1]] = direction1value;
    if (trs.length === i)
      trs.push($('<tr>').appendTo($table));
    this.__renderDirection0(values, trs[i]);
  }));
  return trs;
};

SafeColorsTable.prototype.__renderDirection0 = function(values, $tr){
  $.each(this.__componentValues, bind(this, function(_, direction0value){
    values[this.__directions[0]] = direction0value;
    var rgb = '#' + values.join('');
    $('<td>').appendTo($tr).append(this.__blockCreator(new ColorSpec(rgb)).$container);
  }));
};
