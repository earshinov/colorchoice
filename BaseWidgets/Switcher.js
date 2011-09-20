'use strict';

function SwitcherOption(id, name, data){
  this.id = id;
  this.name = name;
  $.extend(this, data);
}

function bindElementSwitcher(switcher){
  switcher.onchange(function(selected, _, previouslySelected){
    if (previouslySelected)
      previouslySelected.$element.hide();
    selected.$element.show();
  });
}
