'use strict';

function Checkbox(text){
  this.$container = null;
  this.__text = text
  this.__subscribers = { onchange: [] };
}

Checkbox.prototype.render = function(){
  this.$container = $('<label><input type="checkbox"/></label>');
  this.$container.append(document.createTextNode(' ' + this.__text));
  this.$container.children('input').change(bind(this, function(e){
    this.__fireOnchange($(e.currentTarget).is(':checked'));
  }));
  return this.$container;
};

Checkbox.prototype.__fireOnchange = function(checked){
  $.each(this.__subscribers['onchange'], bind(this, function(_, callback){
    callback(checked, this);
  }));
};

Checkbox.prototype.onchange = function(callback){
  this.__subscribers['onchange'].push(callback);
};
