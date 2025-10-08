import type { Reactive } from "vue";
import type { Square } from "../square";
import type { SelfViewer } from "..";
import SquareViewerExpose from "./index.vue";

export type ReactiveSquare = Reactive<Square>;

export type SquareViewerExpose = InstanceType<typeof SquareViewerExpose>;

export class SquarePageViewer implements SelfViewer {
  public sq: ReactiveSquare;
  public componentRef: SquareViewerExpose | null;

  constructor(sq: ReactiveSquare, componentRef: SquareViewerExpose | null) {
    this.sq = sq;
    this.componentRef = componentRef;
  }

  show(): void {
    this.componentRef?.addSquare(this.sq);
  }

  remove(): void {
    this.componentRef?.removeSquare(this.sq.id);
  }
}
