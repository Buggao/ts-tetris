import { SquaresShapesDict } from "../tetris/primitives";

export interface Coordinate {
    x: number;
    y: number;
}

// 小方块的显示类
export interface SelfViewer {
    // 显示
    show(): void
    // 移除
    remove(): void
}

export interface Coordinate {
  x: number;
  y: number;
}

// 小方块的显示类（供视图实现）
export interface SelfViewer {
  show(): void;
  remove(): void;
}



export type SquaresType = keyof typeof SquaresShapesDict;

// 颜色数组
export const SquaresColors: string[] = [
  "red",
  "green",
  "blue",
  "orange",
  "yellow",
  "purple",
  "cyan",
];

// 方块可移动的方向
export type MovieDirection = "left" | "right" | "down";