import { SquareGroup } from "./square-group"
import { type SquaresType, type Coordinate, SquaresShapesDict, type MovieDirection } from "."
import GameConfig from "@/game-config"

export class TerisRules {

  // 判断能否进行移动，包含两个参数 方块形状shape和 目标地址 targetPoint
  static couldMove(type: SquaresType, targetPoint: Coordinate){
    const targatCoordinate: Coordinate[] = SquaresShapesDict[type]!.map(element => {
      return {
        x: element.x + targetPoint.x,
        y: element.y + targetPoint.y
      }
    });
    return !targatCoordinate.some(item => (
      item.x < 0||
      item.y < 0 ||
      item.x >= GameConfig.gameAreaSize.width ||
      item.y >= GameConfig.gameAreaSize.height
    ))
  }

  static move(teris: SquareGroup, direction: MovieDirection) { 
    switch (direction) {
      case "left":
        return this.moveByPoint(teris, {
          x: teris.centerPoint.x - 1,
          y: teris.centerPoint.y
        })
      case "right":
        return this.moveByPoint(teris, {
          x: teris.centerPoint.x + 1,
          y: teris.centerPoint.y
        })
      case "down":
        return this.moveByPoint(teris, {
          x: teris.centerPoint.x,
          y: teris.centerPoint.y+1
        })
    }
  }

  private static moveByPoint(teris: SquareGroup, point: Coordinate) {
    if(this.couldMove(teris.type, point)) {
      teris.centerPoint = point
      return true
    } else {
      return false
    }
  }
}