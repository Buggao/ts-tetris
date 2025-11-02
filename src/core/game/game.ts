import { SquareGroup } from "@/core/tetris/square-group";



enum GameStatus {
    Playing = 0,
    Paused = 1,
    Over = 2,
}

export class Game {
    // 游戏状态
    static GameStatus = GameStatus; 
    // private _status: GameStatus = GameStatus.Playing;

    // 当前方块
    static curTeris: SquareGroup | null = null;
    // 下一个方块

    //下落速度
    // 定时器
    // 当前得分
}