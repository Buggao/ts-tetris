<script setup lang="ts">
import { ref, onMounted} from 'vue';
import SquaresViewer from './components/squares/page-viewer/index.vue';
import { SquarePageViewer, type SquareViewerExpose } from './components/squares/page-viewer';
import { createTeris } from "../src/components/squares/index"
import { TerisRules } from "./components/squares/teris-rules"
import { type MovieDirection } from "./components/squares"

const viewerRef = ref<SquareViewerExpose | null>(null);
let teris = createTeris({x: 3, y: 1});

onMounted(() => {
  bindTerisToViewer();
})

function bindTerisToViewer() {
  // 绑定视图层
  teris.squares.forEach(element => {
    element.selfViewer = new SquarePageViewer(element, viewerRef.value);
  });
}

function handleChangeSquareType() {
  // 清理旧方块的 UI
  teris.squares.forEach((sq) => sq.selfViewer?.remove());
  // 生成新方块并绑定到视图
  teris = createTeris({x: 4, y: 1});
  bindTerisToViewer();
}

function handleSquareMove(direction: MovieDirection) {
  const moved = TerisRules.move(teris, direction)
  if (moved) {
    // 逻辑层坐标已更新，同步到 UI
    viewerRef.value?.updateAll(teris.squares)
  }
}

function handleRoute() {
  teris.rotate()
  viewerRef.value?.updateAll(teris.squares)
}

function showSquareInfo() {
  console.log("current square is", teris)
}

</script>

<template>
  <main>
    <SquaresViewer class="play-area" ref="viewerRef" />
    <button @click="handleChangeSquareType">改变</button> 
    <button @click="handleSquareMove('down')">向下移动</button>
    <button @click="handleSquareMove('left')">向左移动</button>
    <button @click="handleSquareMove('right')">向右移动</button>
    <button @click="handleRoute()">顺时针旋转</button>
    <button @click="showSquareInfo">show sqare</button>
  </main>
</template>

<style scoped>
main {
  padding: 100px 0;
}
.play-area {
  width: 400px;
  height: 800px;
  min-height: 30rem;
  border: 1px solid #ccc;
  margin: 0 auto;
  background-color: #222;
}
</style>
