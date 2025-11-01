import {type Coordinate} from "."
import GameConfig from "@/core/game/game-config"

export class TerisRules {
  // 判断能否进行移动，包含两个参数 方块形状shape和 目标地址 targetPoint
  static couldMove( targetPoints: Coordinate[]){
    return !targetPoints.some(item => (
      item.x < 0||
      item.y < 0 ||
      item.x >= GameConfig.gameAreaSize.width ||
      item.y >= GameConfig.gameAreaSize.height
    ))
  }
  
  static couldRotate( targetPoints: Coordinate[]){
    return this.couldMove(targetPoints)
  }
 
}