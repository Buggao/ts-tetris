import type { SquaresType, Coordinate } from "./primitives";
import { Square } from "./square";
export class SquareGroup {
  private _squares: readonly Square[];

  private _type: SquaresType;

  private _centerPoint: Coordinate;

  // 当前形状的相对偏移（相对于中心点），用于旋转持久化（形状坐标）
  private _relativeOffsets: Coordinate[];

  protected isCounter: boolean = false;

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
    // 使用当前相对偏移来计算每个小方块的绝对坐标
    this._relativeOffsets.forEach((item, index) => {
      const squareLocation = {
        x: point.x + item.x,
        y: point.y + item.y,
      };
      if (this.squares[index]) {
        this.squares[index].coordinate = squareLocation;
      }
    });
  }

  constructor(type: SquaresType, offsets: Coordinate[], centerPoint: Coordinate, color: string) {
    this._type = type;
    this._centerPoint = centerPoint;
    // 初始化形状坐标
    this._relativeOffsets = offsets.map(({ x, y }) => ({ x, y }));

    const squareArr: Square[] = [];
    // // 基于初始相对偏移生成小方块
    this._relativeOffsets.forEach((item) => {
      const squareLocation = {
        x: centerPoint.x + item.x,
        y: centerPoint.y + item.y,
      };
      const square = new Square(squareLocation, color);
      squareArr.push(square);
    });
    this._squares = squareArr;
  }

  public rotate() {
    // 计算旋转后的相对偏移：顺时针 (x, y) => (y, -x)，逆时针 (x, y) => (-y, x)
    const rotatedOffsets = this._relativeOffsets.map(({ x, y }) => (
      this.isCounter ? { x: -y, y: x } : { x: y, y: -x }
    ));

    // 更新当前相对偏移
    this._relativeOffsets = rotatedOffsets;
    // 复用 setter，根据中心点重新计算绝对坐标
    this.centerPoint = this.centerPoint;
  }
}
