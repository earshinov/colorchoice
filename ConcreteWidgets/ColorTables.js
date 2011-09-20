'use strict';

function ColorTables(blockCreator, blockFromElementCreator){

  this.$container = null;
  this.__menu = null;
  this.__namedColors = new ColorGroupsTable(NAMED_COLORS, blockCreator);
  this.__safeColors = new SafeColorsTable(blockCreator);
  this.__colorSelection = new ColorSelection(blockCreator, blockFromElementCreator);
  this.__blockFromElementCreator = blockFromElementCreator;
}

ColorTables.prototype.render = function(){
  
  this.__namedColors.render();
  this.__safeColors.render();
  
  var $tables = 
    this.__namedColors.$container
    .add(this.__safeColors.$container);
  $tables.hide();
  $tables.click(bind(this, function(e){
    var $colorBlock = $(e.target).closest('.colorBlock');
    if ($colorBlock.length){
      var colorBlock = this.__blockFromElementCreator($colorBlock);
      if (!$colorBlock.hasClass('selected')){
        $colorBlock.addClass('selected');
        this.__colorSelection.add(colorBlock.colorSpec, function(){
          $colorBlock.removeClass('selected');
        });
      }
      else
        this.__colorSelection.remove(colorBlock.colorSpec);
      return false;
    }
  }));
  
  this.__menu = new LinkListSwitcher([
    new SwitcherOption('named', 'Именованные цвета', { $element: this.__namedColors.$container }),
    new SwitcherOption('safe', 'Безопасные цвета', { $element: this.__safeColors.$container })
  ]);
  bindElementSwitcher(this.__menu);
  this.__menu.render();
  this.__menu.$container.addClass('colorTablesMenu');
  
  this.$container = $('<div class="colorTables">')
    .append($('<div>')
      .append(this.__menu.$container)
      .append($tables))
    .append(this.__colorSelection.render());
  this.__menu.setSelected('named');
    
  return this.$container;
};
