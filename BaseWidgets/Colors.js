function ColorGroup(name, colors){
  this.name = name;
  this.colors = colors;
}


function ColorSpec(name, rgb){
  this.name = name || null;
  this.rgb = rgb || this.name;
}

ColorSpec.prototype.equals = function(other){
  return other instanceof ColorSpec &&
    this.name === other.name &&
    this.rgb === other.rgb;
}
