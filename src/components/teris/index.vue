<script setup lang="ts">
  import { computed, reactive } from 'vue';
  import type { Square } from '@/core/teris/square';
  import pageViewerConfig from '@/core/teris/square-config';

  // 组件内部维护独立的响应式视图状态，避免 UI 入侵逻辑层
  type SquareViewState = {
    id: string;
    coordinate: { x: number; y: number };
    color: string;
  }

  const squareList = reactive<Map<string, SquareViewState>>(new Map());

  const squareWidth = computed(() =>  pageViewerConfig.SquareSizeByPage.width )
  const squareHeight = computed(() =>  pageViewerConfig.SquareSizeByPage.height )

  function addSquare(square: Square) {
    const state: SquareViewState = reactive({
      id: square.id,
      coordinate: { x: square.coordinate.x, y: square.coordinate.y },
      color: square.color,
    });
    squareList.set(square.id, state);
  }

  function removeSquare(id: string) {
    squareList.delete(id);
  }

  function updateSquare(square: Square) {
    const state = squareList.get(square.id);
    if (!state) return;
    state.coordinate.x = square.coordinate.x;
    state.coordinate.y = square.coordinate.y;
    state.color = square.color;
  }

  function updateAll(squares: readonly Square[]) {
    squares.forEach(updateSquare);
  }

  const squares = computed(() => Array.from(squareList.values()));

  // 对外暴露方法，供 SquarePageViewer / App 调用
  defineExpose({ addSquare, removeSquare, updateSquare, updateAll })
</script>

<template>
  <div class="square-grid">
    <div 
      v-for="square in squares" 
      :key="square.id" 
      class="square"
      :style="{
        backgroundColor: square.color,
        width: `${squareWidth}px`,
        height: `${squareHeight}px`,
        top: `${square.coordinate.y * squareHeight}px`,
        left: `${square.coordinate.x * squareWidth}px`
      }">
    </div>
  </div>
</template>

<style scoped>
  .square-grid {
    /* display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 4px;
    padding: 8px; */
    position: relative;
  }

  .square {
    position: absolute;
    border: 1px solid #ccc;
  }
</style>