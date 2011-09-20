'use strict';

function BackgroundColors(){
  this.$container = null;
  this.__tables = new ColorTables(
    colorBlockCreator(BackgroundColorBlock),
    BackgroundColorBlock.fromElement);
  this.__textPreviewCheckbox = new Checkbox('Предпросмотр текста');
}

BackgroundColors.prototype.render = function(){
  
  this.__tables.render();
  this.__textPreviewCheckbox.onchange(bind(this, function(checked){
    this.__tables.$container.toggleClass('withTextPreview', checked);
  }));
  
  this.$container = $('<div>')
    .append(this.__textPreviewCheckbox.render())
    .append(this.__tables.$container);
  this.__textPreviewCheckbox.$container.attr('class', 'textPreviewCheckbox');
  
  return this.$container;
};
