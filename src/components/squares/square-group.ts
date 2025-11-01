import type { SquaresType, Coordinate, MovieDirection } from "./primitives";
import { Square } from "./square";
import { TerisRules } from "./teris-rules";
import { SquaresShapesDict } from "./primitives";
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

  constructor(type: SquaresType, centerPoint: Coordinate, color: string) {
    this._type = type;
    this._centerPoint = centerPoint;
    // 初始化形状坐标
    this._relativeOffsets = SquaresShapesDict[type]!.map(({ x, y }) => ({ x, y }));

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

  public move(direction: MovieDirection) {
    switch (direction) {
      case "left":
        return this.moveByPoint({ x: this.centerPoint.x - 1, y: this.centerPoint.y });
      case "right":
        return this.moveByPoint({ x: this.centerPoint.x + 1, y: this.centerPoint.y });
      case "down":
        return this.moveByPoint({ x: this.centerPoint.x, y: this.centerPoint.y + 1 });
    }
  }

  private moveByPoint(targetPoint: Coordinate) {
    const points = this.squares.map((item) => ({
      x: item.coordinate.x + targetPoint.x - this.centerPoint.x,
      y: item.coordinate.y + targetPoint.y - this.centerPoint.y,
    }));
    if (TerisRules.couldMove(points)) {
      this.centerPoint = targetPoint;
      return true;
    }
    return false;
  }

  public rotate() {
    // 计算旋转后的相对偏移：顺时针 (x, y) => (y, -x)，逆时针 (x, y) => (-y, x)
    const rotatedOffsets = this._relativeOffsets.map(({ x, y }) => (
      this.isCounter ? { x: -y, y: x } : { x: y, y: -x }
    ));

    if (!TerisRules.couldRotate(rotatedOffsets)) {
      return false;
    }
    // 更新当前相对偏移
    this._relativeOffsets = rotatedOffsets;
    // 复用 setter，根据中心点重新计算绝对坐标
    this.centerPoint = this.centerPoint;
    return true;
  }

  public getRelativeOffsets(): ReadonlyArray<Coordinate> {
    return this._relativeOffsets.map(({ x, y }) => ({ x, y }));
  }
}
