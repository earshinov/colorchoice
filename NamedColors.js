'use strict';

/*
Информация со страницы http://en.wikipedia.org/wiki/Web_colors#X11_color_names
со следующими изменениями:
- последний блок зелёных цветов перенесён к синим
- столбец синих цветов разбит на два, потому что слишком большой
*/
var NAMED_COLORS = [
  new ColorGroup('Red', [
    new ColorSpec('IndianRed',            '#CD5C5C'),
    new ColorSpec('LightCoral',           '#F08080'),
    new ColorSpec('Salmon',               '#FA8072'),
    new ColorSpec('DarkSalmon',           '#E9967A'),
    new ColorSpec('LightSalmon',          '#FFA07A'),
    new ColorSpec('Red',                  '#FF0000'),
    new ColorSpec('Crimson',              '#DC143C'),
    new ColorSpec('FireBrick',            '#B22222'),
    new ColorSpec('DarkRed',              '#8B0000')
  ]),
  new ColorGroup('Pink', [
    new ColorSpec('Pink',                 '#FFC0CB'),
    new ColorSpec('LightPink',            '#FFB6C1'),
    new ColorSpec('HotPink',              '#FF69B4'),
    new ColorSpec('DeepPink',             '#FF1493'),
    new ColorSpec('MediumVioletRed',      '#C71585'),
    new ColorSpec('PaleVioletRed',        '#DB7093')
  ]),
  new ColorGroup('Orange', [
    new ColorSpec('LightSalmon',          '#FFA07A'),
    new ColorSpec('Coral',                '#FF7F50'),
    new ColorSpec('Tomato',               '#FF6347'),
    new ColorSpec('OrangeRed',            '#FF4500'),
    new ColorSpec('DarkOrange',           '#FF8C00'),
    new ColorSpec('Orange',               '#FFA500')
  ]),
  new ColorGroup('Yellow', [
    new ColorSpec('Gold',                 '#FFD700'),
    new ColorSpec('Yellow',               '#FFFF00'),
    new ColorSpec('LightYellow',          '#FFFFE0'),
    new ColorSpec('LemonChiffon',         '#FFFACD'),
    new ColorSpec('LightGoldenrodYellow', '#FAFAD2'),
    new ColorSpec('PapayaWhip',           '#FFEFD5'),
    new ColorSpec('Moccasin',             '#FFE4B5'),
    new ColorSpec('PeachPuff',            '#FFDAB9'),
    new ColorSpec('PaleGoldenrod',        '#EEE8AA'),
    new ColorSpec('Khaki',                '#F0E68C'),
    new ColorSpec('DarkKhaki',            '#BDB76B')
  ]),
  new ColorGroup('Purple', [
    new ColorSpec('Lavender',             '#E6E6FA'),
    new ColorSpec('Thistle',              '#D8BFD8'),
    new ColorSpec('Plum',                 '#DDA0DD'),
    new ColorSpec('Violet',               '#EE82EE'),
    new ColorSpec('Orchid',               '#DA70D6'),
    new ColorSpec('Fuchsia',              '#FF00FF'),
    new ColorSpec('Magenta',              '#FF00FF'),
    new ColorSpec('MediumOrchid',         '#BA55D3'),
    new ColorSpec('MediumPurple',         '#9370DB'),
    new ColorSpec('BlueViolet',           '#8A2BE2'),
    new ColorSpec('DarkViolet',           '#9400D3'),
    new ColorSpec('DarkOrchid',           '#9932CC'),
    new ColorSpec('DarkMagenta',          '#8B008B'),
    new ColorSpec('Purple',               '#800080'),
    new ColorSpec('Indigo',               '#4B0082'),
    new ColorSpec('DarkSlateBlue',        '#483D8B'),
    new ColorSpec('SlateBlue',            '#6A5ACD'),
    new ColorSpec('MediumSlateBlue',      '#7B68EE')
  ]),
  new ColorGroup('Green', [
    new ColorSpec('GreenYellow',          '#ADFF2F'),
    new ColorSpec('Chartreuse',           '#7FFF00'),
    new ColorSpec('LawnGreen',            '#7CFC00'),
    new ColorSpec('Lime',                 '#00FF00'),
    new ColorSpec('LimeGreen',            '#32CD32'),
    new ColorSpec('PaleGreen',            '#98FB98'),
    new ColorSpec('LightGreen',           '#90EE90'),
    new ColorSpec('MediumSpringGreen',    '#00FA9A'),
    new ColorSpec('SpringGreen',          '#00FF7F'),
    new ColorSpec('MediumSeaGreen',       '#3CB371'),
    new ColorSpec('SeaGreen',             '#2E8B57'),
    new ColorSpec('ForestGreen',          '#228B22'),
    new ColorSpec('Green',                '#008000'),
    new ColorSpec('DarkGreen',            '#006400'),
    new ColorSpec('YellowGreen',          '#9ACD32'),
    new ColorSpec('OliveDrab',            '#6B8E23'),
    new ColorSpec('Olive',                '#808000'),
    new ColorSpec('DarkOliveGreen',       '#556B2F')
  ]),
  new ColorGroup('Blue 1', [
    new ColorSpec('MediumAquamarine',     '#66CDAA'),
    new ColorSpec('DarkSeaGreen',         '#8FBC8F'),
    new ColorSpec('LightSeaGreen',        '#20B2AA'),
    new ColorSpec('DarkCyan',             '#008B8B'),
    new ColorSpec('Teal',                 '#008080'),
    new ColorSpec('Aqua',                 '#00FFFF'),
    new ColorSpec('Cyan',                 '#00FFFF'),
    new ColorSpec('LightCyan',            '#E0FFFF'),
    new ColorSpec('PaleTurquoise',        '#AFEEEE'),
    new ColorSpec('Aquamarine',           '#7FFFD4'),
    new ColorSpec('Turquoise',            '#40E0D0'),
    new ColorSpec('MediumTurquoise',      '#48D1CC'),
    new ColorSpec('DarkTurquoise',        '#00CED1'),
    new ColorSpec('CadetBlue',            '#5F9EA0'),
    new ColorSpec('SteelBlue',            '#4682B4')
  ]),
  new ColorGroup('Blue 2', [
    new ColorSpec('LightSteelBlue',       '#B0C4DE'),
    new ColorSpec('PowderBlue',           '#B0E0E6'),
    new ColorSpec('LightBlue',            '#ADD8E6'),
    new ColorSpec('SkyBlue',              '#87CEEB'),
    new ColorSpec('LightSkyBlue',         '#87CEFA'),
    new ColorSpec('DeepSkyBlue',          '#00BFFF'),
    new ColorSpec('DodgerBlue',           '#1E90FF'),
    new ColorSpec('CornflowerBlue',       '#6495ED'),
    new ColorSpec('RoyalBlue',            '#4169E1'),
    new ColorSpec('Blue',                 '#0000FF'),
    new ColorSpec('MediumBlue',           '#0000CD'),
    new ColorSpec('DarkBlue',             '#00008B'),
    new ColorSpec('Navy',                 '#000080'),
    new ColorSpec('MidnightBlue',         '#191970')
  ]),
  new ColorGroup('Brown', [
    new ColorSpec('Cornsilk',             '#FFF8DC'),
    new ColorSpec('BlanchedAlmond',       '#FFEBCD'),
    new ColorSpec('Bisque',               '#FFE4C4'),
    new ColorSpec('NavajoWhite',          '#FFDEAD'),
    new ColorSpec('Wheat',                '#F5DEB3'),
    new ColorSpec('BurlyWood',            '#DEB887'),
    new ColorSpec('Tan',                  '#D2B48C'),
    new ColorSpec('RosyBrown',            '#BC8F8F'),
    new ColorSpec('SandyBrown',           '#F4A460'),
    new ColorSpec('Goldenrod',            '#DAA520'),
    new ColorSpec('DarkGoldenrod',        '#B8860B'),
    new ColorSpec('Peru',                 '#CD853F'),
    new ColorSpec('Chocolate',            '#D2691E'),
    new ColorSpec('SaddleBrown',          '#8B4513'),
    new ColorSpec('Sienna',               '#A0522D'),
    new ColorSpec('Brown',                '#A52A2A'),
    new ColorSpec('Maroon',               '#800000')
  ]),
  new ColorGroup('White', [
    new ColorSpec('White',                '#FFFFFF'),
    new ColorSpec('Snow',                 '#FFFAFA'),
    new ColorSpec('Honeydew',             '#F0FFF0'),
    new ColorSpec('MintCream',            '#F5FFFA'),
    new ColorSpec('Azure',                '#F0FFFF'),
    new ColorSpec('AliceBlue',            '#F0F8FF'),
    new ColorSpec('GhostWhite',           '#F8F8FF'),
    new ColorSpec('WhiteSmoke',           '#F5F5F5'),
    new ColorSpec('Seashell',             '#FFF5EE'),
    new ColorSpec('Beige',                '#F5F5DC'),
    new ColorSpec('OldLace',              '#FDF5E6'),
    new ColorSpec('FloralWhite',          '#FFFAF0'),
    new ColorSpec('Ivory',                '#FFFFF0'),
    new ColorSpec('AntiqueWhite',         '#FAEBD7'),
    new ColorSpec('Linen',                '#FAF0E6'),
    new ColorSpec('LavenderBlush',        '#FFF0F5'),
    new ColorSpec('MistyRose',            '#FFE4E1')
  ]),
  new ColorGroup('Gray', [
    new ColorSpec('Gainsboro',            '#DCDCDC'),
    new ColorSpec('LightGray',            '#D3D3D3'),
    new ColorSpec('Silver',               '#C0C0C0'),
    new ColorSpec('DarkGray',             '#A9A9A9'),
    new ColorSpec('Gray',                 '#808080'),
    new ColorSpec('DimGray',              '#696969'),
    new ColorSpec('LightSlateGray',       '#778899'),
    new ColorSpec('SlateGray',            '#708090'),
    new ColorSpec('DarkSlateGray',        '#2F4F4F'),
    new ColorSpec('Black',                '#000000')
  ])];