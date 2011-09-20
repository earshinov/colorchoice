'use strict';

function BackgroundColorBlock(){
  this.$container = null;
  this.__$coloredDiv = null;
  this.colorSpec = null;
}

BackgroundColorBlock.prototype.render = function(){
  this.$container = $('<div class="colorBlock bgBlock"><div><span>');
  this.__$coloredDiv = this.$container.children();
  return this.$container;
};

BackgroundColorBlock.prototype.set = function(colorSpec){
  this.$container.attr('title', colorSpec.name || '');
  this.__$coloredDiv.css({ backgroundColor: colorSpec.rgb || 'inherit' });
  this.colorSpec = colorSpec;
};

BackgroundColorBlock.fromElement = function($colorBlock){
  var ret = new BackgroundColorBlock();
  ret.$container = $colorBlock;
  ret.__$coloredDiv = $colorBlock.children();
  ret.colorSpec = new ColorSpec(
    ret.$container.attr('title'),
    ret.__$coloredDiv.css('background-color'));
  return ret;
};
