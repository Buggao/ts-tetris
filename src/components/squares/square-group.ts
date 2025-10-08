import { SquaresTypeDict, type Coordinate } from "."
import { Square } from "./square"

type SquaresType = keyof typeof SquaresTypeDict
export class SuqareGroup {

  private _squares: readonly Square[]

  private _type: SquaresType

  private _centerPoint: Coordinate

  get squares() {
    return this._squares
  }

  get type() {
    return this._type
  }

  get centerPoint() {
    return this._centerPoint
  }

  set centerPoint(point: Coordinate) {
    this._centerPoint = point
    SquaresTypeDict[this.type].shape.forEach((item, index) => {
      const squareLocation = {
        x: point.x + item.x,
        y: point.y + item.y
      }
      if (this.squares[index]) {
        this.squares[index].coordinate = squareLocation
      }
    })
  }

  constructor(_type: SquaresType, centerPoint: Coordinate) {
    this._type = _type
    this._centerPoint = centerPoint
    const color = SquaresTypeDict[_type].color
    const squareArr: Square[] = []
    SquaresTypeDict[_type].shape.forEach(item => {
      const squareLocation = {
        x: centerPoint.x + item.x,
        y: centerPoint.y + item.y
      }
      const square = new Square(squareLocation, color)
      squareArr.push(square)
    })
    this._squares = squareArr
  }
}