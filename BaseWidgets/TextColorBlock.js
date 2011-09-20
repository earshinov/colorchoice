'use strict';

function TextColorBlock(){
  this.$container = null;
  this.colorSpec = null;
}

TextColorBlock.prototype.render = function(){
  this.$container = $('<div class="colorBlock textColorBlock"><div>');
  return this.$container;
};

TextColorBlock.prototype.set = function(colorSpec){
  this.$container
    .attr('title', colorSpec.name)
    .css({ color: colorSpec.rgb || 'inherit' });
  this.colorSpec = colorSpec;
};

TextColorBlock.fromElement = function($colorBlock){
  var ret = new TextColorBlock();
  ret.$container = $colorBlock;
  ret.colorSpec = new ColorSpec(
    $colorBlock.attr('title'),
    $colorBlock.css('color'));
  return ret;
};
