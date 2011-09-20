'use strict';

function TextColors(){
  this.$container = null;
  this.__tables = new ColorTables(
    colorBlockCreator(TextColorBlock),
    TextColorBlock.fromElement);
}

TextColors.prototype.render = function(){
  this.__tables.render();
  this.$container = this.__tables.$container;
  return this.$container;
};
