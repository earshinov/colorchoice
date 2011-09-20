'use strict';

function LinkListSwitcher(options){
  this.$container = null;
  this.options = options;
  this.__optionsData = null;
  this.__selected = null;
  this.__subscribers = { onchange: [] };
}

LinkListSwitcher.prototype.__OptionData = function($link, $span){
  this.$link = $link;
  this.$span = $span;
};

LinkListSwitcher.prototype.render = function(){
  this.$container = $('<div>');
  this.__optionsData = [];
  
  $.each(this.options, bind(this, function(i, option){
    if (i > 0)
      this.$container.append(document.createTextNode(' | '));
      
    var $link = $('<a href="#">').text(option.name);
    var $span = $('<span style="display: none;">').text(option.name);
    this.$container.append($link).append($span);
    this.__optionsData.push(new this.__OptionData($link, $span));
    
    $link.click(bind(this, function(){
      this.setSelected(option.id);
      return false;
    }));
  }));
  
  return this.$container;
};

LinkListSwitcher.prototype.setSelected = function(optionId){
  if (this.__selected && this.__selected.id === optionId)
    return;
    
  var index = null;
  $.each(this.options, function(i, option){
    if (option.id === optionId){
      index = i;
      return false;
    }
  });
  if (index === null)
    return;
    
  var optionData = this.__optionsData[index];
  this.$container.children('span').hide();
  this.$container.children('a').show();
  optionData.$link.hide();
  optionData.$span.show();
  
  var previouslySelected = this.__selected;
  this.__selected = this.options[index];
  $.each(this.__subscribers['onchange'], bind(this, function(_, callback){
    callback(this.__selected, this, previouslySelected);
  }));
};

LinkListSwitcher.prototype.onchange = function(callback){
  this.__subscribers['onchange'].push(callback);
};
