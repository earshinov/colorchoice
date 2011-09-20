'use strict';

function bind(self, f){
  return function(){ return f.apply(self, arguments); };
}


function sum(arr){
  return arr.reduce(function(a, b){ return a + b; }, 0);
}


/**
 * Распределить определённое количество элементов, объединённых в
 * группы, по заданному количеству пакетов, так чтобы в каждом пакете
 * было целое число групп, а количество элементов по пакетам было
 * приблизительно одинаковым
 *
 * @param groupSizes массив размеров групп, в элементах
 * @param packetCount количество пакетов
 * @param packetSizes массив размеров пакетов, в группах
 *
 * @pre groupSizes[i] > 0
 * @post packetSizes.length <= packetCount
*/
function distributeGroups(groupSizes, packetCount){
  var packetSizes = [];
  var elementsByPacket = sum(groupSizes) / packetCount;
  var packetGroups = 0;
  var packetElements = 0;
  $.each(groupSizes, function(_, groupElements){
    var diff = Math.abs(elementsByPacket - packetElements);
    var newDiff = Math.abs(elementsByPacket - (packetElements + groupElements));
    if (packetGroups === 0 || newDiff < diff) {
      packetGroups++;
      packetElements += groupElements;
    }
    else {
      packetSizes.push(packetGroups);
      packetGroups = 1;
      packetElements = groupElements;
    }
  });
  if (packetGroups > 0)
    packetSizes.push(packetGroups);
  return packetSizes;
}
