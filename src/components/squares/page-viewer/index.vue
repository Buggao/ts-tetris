<script setup lang="ts">
  import { computed, reactive } from 'vue';
  import type { ReactiveSquare } from '.';
  import pageViewerConfig from './page-viewer-config';

  // 存储所有方块的响应式数据
  const squareList = reactive<Map<string, ReactiveSquare>>(new Map());

  const squareWidth = computed(() =>  pageViewerConfig.SquareSize.width )
  const squareHeight = computed(() =>  pageViewerConfig.SquareSize.height )

  function addSquare(square: ReactiveSquare) {
    squareList.set(square.id, square);
  }

  function removeSquare(id: string) {
    squareList.delete(id);
  }

  const squares = computed(() => Array.from(squareList.values()));

  // 对外暴露方法，供 SquarePageViewer 调用
  defineExpose({ addSquare, removeSquare })
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