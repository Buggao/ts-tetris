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