import type { Square } from "@/core/tetris/square";
import type { SelfViewer } from "@/core/types/tetris.types";
import SquareViewerExpose from "./index.vue";

export type SquareViewerExpose = InstanceType<typeof SquareViewerExpose>;

export class SquarePageViewer implements SelfViewer {
  public sq: Square;
  public componentRef: SquareViewerExpose | null;

  constructor(sq: Square, componentRef: SquareViewerExpose | null) {
    this.sq = sq;
    this.componentRef = componentRef;
    this.show()
  }

  show(): void {
    this.componentRef?.addSquare(this.sq);
  }

  remove(): void {
    this.componentRef?.removeSquare(this.sq.id);
  }
}
