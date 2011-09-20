'use strict';

$(function(){
  var $content = $('#content');

  var backgroundColors = new BackgroundColors();
  $content.append(backgroundColors.render());
  backgroundColors.$container.hide();
  
  var textColors = new TextColors();
  $content.append(textColors.render());
  textColors.$container.hide();

  var topMenu = new LinkListSwitcher([
    new SwitcherOption('background', 'Цвет фона', { $element: backgroundColors.$container }),
    new SwitcherOption('text', 'Цвет текста', { $element: textColors.$container })
    ]);
  bindElementSwitcher(topMenu);
  $content.prepend(topMenu.render());
  topMenu.$container.attr('id', 'topMenu');
  topMenu.setSelected('background');
});
