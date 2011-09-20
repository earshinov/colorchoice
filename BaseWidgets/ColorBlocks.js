'use strict';

function colorBlockCreator(ctor){
  return function(colorSpec){
    var ret = new ctor();
    ret.render();
    ret.set(colorSpec || new ColorSpec());
    return ret;
  };
}
