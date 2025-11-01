import type { Coordinate } from "../types/teris.types";

// 四联方块的组合类型，相对中心点的偏移坐标
export const SquaresShapesDict: Record<string, Coordinate[]> = {
  longBar: [
    { x: -1, y: 0 },
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
  ],
  // 田形状 O
  teewee: [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: 1, y: -1 },
  ],
  // t形状 T
  block: [
    { x: 0, y: 1 },
    { x: 0, y: 0 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
  ],
  // L形状 L
  leftGun: [
    { x: 0, y: 1 },
    { x: 0, y: 0 },
    { x: -1, y: 0 },
    { x: -2, y: 0 },
  ],
  // 对称的L形 J
  rightGun: [
    { x: -1, y: 0 },
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
  ],
  // 朝右的z形状 S
  rightSnake: [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: -1, y: -1 },
  ],
  // 左形状的左 z
  leftSnake: [
    { x: -1, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: -1 },
    { x: -1, y: -1 },
  ],
} satisfies Record<string, Coordinate[]>;