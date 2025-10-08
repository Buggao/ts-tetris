export interface Coordinate {
  x: number;
  y: number;
}

// 小方块的显示类
export interface SelfViewer {
  // 显示
  show(): void;
  // 移除
  remove(): void;
}

export interface SquareTypeDef {
  shape: Coordinate[];
  color: string;
}

// 小方块的组合类型, 以方块左上角为0，0起始位
export const SquaresTypeDict = {
  longBar: {
    shape: [
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 },
    ],
    color: "red",
  },
  teewee: {
    shape: [
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
    ],
    color: "green",
  },
  block: {
    shape: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
    ],
    color: "blue",
  },
  leftGun: {
    shape: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
    ],
    color: "orange",
  },
  rightGun: {
    shape: [
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 2, y: 0 },
    ],
    color: "yellow",
  },
  rightSnake: {
    shape: [
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
    ],
    color: "purple",
  },
  leftSnake: {
    shape: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
    ],
    color: "cyan",
  },
} satisfies Record<string, SquareTypeDef>;


export type SquaresType = keyof typeof SquaresTypeDict