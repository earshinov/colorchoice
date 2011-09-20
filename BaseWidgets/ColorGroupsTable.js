'use strict';

function ColorGroupsTable(colorGroups, blockCreator){
  this.$container = null;
  this.columnCount = 9;
  this.__colorGroups = colorGroups;
  this.__blockCreator = blockCreator;
}

ColorGroupsTable.prototype.render = function(){

  var groupSizes = this.__colorGroups.map(function(group){ return group.colors.length + 1; });
  var packetSizes = distributeGroups(groupSizes, this.columnCount);
  var groupI = 0;
  var columns = [];
  var rows = 0;
  $.each(packetSizes, bind(this, function(_, packetSize){
    var column = [];
    var groupEnd = groupI + packetSize;
    for (; groupI < groupEnd; groupI++){
      var group = this.__colorGroups[groupI];
      column.push($('<th>').text(group.name).get(0));
      $.each(group.colors, bind(this, function(_, color){
        var $block = this.__blockCreator(color).$container;
        column.push($('<td>').append($block).get(0));
      }));
    }
    columns.push(column);
    rows = Math.max(rows, column.length);
  }));

  var $table = $('<table class="colorTable">');
  for (var row = 0; row < rows; row++) {
    var $tr = $('<tr>');
    $.each(columns, function(_, column){
      $tr.append(column.length > row ? column[row] : '<td>');
    });
    $table.append($tr);
  }

  this.$container = $table;
  return this.$container;
};
