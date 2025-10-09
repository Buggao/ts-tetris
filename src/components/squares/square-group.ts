import { SquaresShapesDict, SquaresColors,type Coordinate } from ".";
import { Square } from "./square";

type SquaresType = keyof typeof SquaresShapesDict;
export class SuqareGroup {
  private _squares: readonly Square[];

  private _type: SquaresType;

  private _centerPoint: Coordinate;

  get squares() {
    return this._squares;
  }

  get type() {
    return this._type;
  }

  get centerPoint() {
    return this._centerPoint;
  }

  set centerPoint(point: Coordinate) {
    this._centerPoint = point;
    SquaresShapesDict[this.type].forEach((item, index) => {
      const squareLocation = {
        x: point.x + item.x,
        y: point.y + item.y,
      };
      if (this.squares[index]) {
        this.squares[index].coordinate = squareLocation;
      }
    });
  }

  constructor(_type: SquaresType, centerPoint: Coordinate, color: string) {
    this._type = _type;
    this._centerPoint = centerPoint;
    const squareArr: Square[] = [];
    SquaresShapesDict[_type].forEach((item) => {
      const squareLocation = {
        x: centerPoint.x + item.x,
        y: centerPoint.y + item.y,
      };
      const square = new Square(squareLocation, color);
      squareArr.push(square);
    });
    this._squares = squareArr;
  }
}

export function createTeris(centerPoint: Coordinate) {
  const randomType = Object.keys(SquaresShapesDict)[
    Math.floor(Math.random() * Object.keys(SquaresShapesDict).length)
  ] as SquaresType;
  const color = SquaresColors[Math.floor(Math.random() * SquaresColors.length)]!;
  return new SuqareGroup(randomType, centerPoint, color);
}
