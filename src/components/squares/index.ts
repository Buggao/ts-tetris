import { SquareGroup } from "./square-group";
import { type Coordinate, SquaresShapesDict, SquaresColors } from "./primitives";


export class LongBar extends SquareGroup {
  constructor(centerPoint: Coordinate, color: string) {
    super("longBar", SquaresShapesDict.longBar as Coordinate[], centerPoint, color);
  }
  public rotate() {
    super.rotate();
    this.isCounter = !this.isCounter;
  } 
}

export class Teewee extends SquareGroup {
  constructor(centerPoint: Coordinate, color: string) {
    super("teewee", SquaresShapesDict.teewee as Coordinate[], centerPoint, color);
  }
  public rotate() {
    return false
  }
}

export class Block extends SquareGroup {
  constructor(centerPoint: Coordinate, color: string) {
    super("block", SquaresShapesDict.block as Coordinate[], centerPoint, color);
  }
  public rotate() {
    super.rotate();
  }
}

export class LeftGun extends SquareGroup {
  constructor(centerPoint: Coordinate, color: string) {
    super("leftGun", SquaresShapesDict.leftGun as Coordinate[], centerPoint, color);
  }
}

export class RightGun extends SquareGroup {
  constructor(centerPoint: Coordinate, color: string) {
    super("rightGun", SquaresShapesDict.rightGun as Coordinate[], centerPoint, color);
  }
}

export class RightSnake extends SquareGroup {
  constructor(centerPoint: Coordinate, color: string) {
    super("rightSnake", SquaresShapesDict.rightSnake as Coordinate[], centerPoint, color);
  }
  public rotate() {
    super.rotate();
    this.isCounter = !this.isCounter;
  }
}

export class LeftSnake extends SquareGroup {
  constructor(centerPoint: Coordinate, color: string) {
    super("leftSnake", SquaresShapesDict.leftSnake as Coordinate[], centerPoint, color);
  }
  public rotate() {
    super.rotate();
    this.isCounter = !this.isCounter;
  }
}

export const shapes = [
  LongBar,
  Teewee,
  Block,
  LeftGun,
  RightGun,
  RightSnake,
  LeftSnake,
]

// 透出基础类型与字典，方便外部使用
export * from "./primitives";

export function createTeris(centerPoint: Coordinate) {
  const RandomShapeClass = shapes[
    Math.floor(Math.random() * shapes.length)
  ] as new (centerPoint: Coordinate, color: string) => SquareGroup;
  const color = SquaresColors[Math.floor(Math.random() * SquaresColors.length)]!;
  return new RandomShapeClass(centerPoint, color);
}