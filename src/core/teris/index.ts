import { SquareGroup } from "./square-group";
import { type Coordinate, SquaresColors } from "../types/teris.types";


export class LongBar extends SquareGroup {
  constructor(centerPoint: Coordinate, color: string) {
    super("longBar", centerPoint, color);
  }
  public rotate(): boolean {
    const result = super.rotate();
    if (result) {
      this.isCounter = !this.isCounter;
    }
    return result;
  }
}

export class Teewee extends SquareGroup {
  constructor(centerPoint: Coordinate, color: string) {
    super("teewee", centerPoint, color);
  }
  public rotate() {
    return false
  }
}

export class Block extends SquareGroup {
  constructor(centerPoint: Coordinate, color: string) {
    super("block", centerPoint, color);
  }
  public rotate(): boolean {
    const result = super.rotate();
    if (result) {
      this.isCounter = !this.isCounter;
    }
    return result;
  }
}

export class LeftGun extends SquareGroup {
  constructor(centerPoint: Coordinate, color: string) {
    super("leftGun", centerPoint, color);
  }
}

export class RightGun extends SquareGroup {
  constructor(centerPoint: Coordinate, color: string) {
    super("rightGun", centerPoint, color);
  }
}

export class RightSnake extends SquareGroup {
  constructor(centerPoint: Coordinate, color: string) {
    super("rightSnake", centerPoint, color);
  }
  public rotate(): boolean {
    const result = super.rotate();
    if (result) {
      this.isCounter = !this.isCounter;
    }
    return result;
  }
}

export class LeftSnake extends SquareGroup {
  constructor(centerPoint: Coordinate, color: string) {
    super("leftSnake", centerPoint, color);
  }
  public rotate(): boolean {
    const result = super.rotate();
    if (result) {
      this.isCounter = !this.isCounter;
    }
    return result;
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
export * from "../types/teris.types";

export function createTeris(centerPoint: Coordinate) {
  const RandomShapeClass = shapes[
    Math.floor(Math.random() * shapes.length)
  ] as new (centerPoint: Coordinate, color: string) => SquareGroup;
  const color = SquaresColors[Math.floor(Math.random() * SquaresColors.length)]!;
  return new RandomShapeClass(centerPoint, color);
}