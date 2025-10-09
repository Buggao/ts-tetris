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

// 形状只保留坐标数组；颜色单独维护

// 小方块的组合类型, 以方块左上角为0，0起始位
export const SquaresShapesDict = {
  longBar: [
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 3, y: 1 },
  ],
  teewee: [
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
  ],
  block: [
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
  ],
  leftGun: [
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
  ],
  rightGun: [
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 2, y: 0 },
  ],
  rightSnake: [
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
  ],
  leftSnake: [
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
  ],
} satisfies Record<string, Coordinate[]>;

export type SquaresType = keyof typeof SquaresShapesDict;

// 颜色作为数组导出，若需要键值映射也提供一个安全的 Map
export const SquaresColors: string[] = [
  "red",
  "green",
  "blue",
  "orange",
  "yellow",
  "purple",
  "cyan",
];
