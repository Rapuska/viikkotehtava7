export class Shape {
  _x
  _y
  _lineWidth
  _shapeColor

  constructor (x, y, _lineWidth = 1, _shapeColor = 'red') {
    this._x = x
    this._y = y
    this._lineWidth = _lineWidth
    this._shapeColor = _shapeColor
  }

  set setLineWidth(lineWidth) {
    this._lineWidth = lineWidth
  }

  set setShapeColor(shapeColor) {
    this._shapeColor = shapeColor 
  }
}
