import { Rectangle } from "./Rectangle.js"

export class Square extends Rectangle {
  #width

  constructor (x, y, width) {
    super(x, y)
    this.#width = width
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.rect(this._x, this._y, this.#width, this.#width)
    ctx.lineWidth = this._lineWidth
    ctx.strokeStyle = this._shapeColor
    ctx.stroke();
  }
}