<script setup lang="ts">
import { ref, reactive, onMounted} from 'vue';
import SquaresViewer from './components/squares/page-viewer/index.vue';
import { SquarePageViewer, type SquareViewerExpose } from './components/squares/page-viewer';
import { SuqareGroup, createTeris } from "./components/squares/square-group"

const viewerRef = ref<SquareViewerExpose | null>(null);
let teris = reactive(createTeris({x: 0, y: 0}));

onMounted(() => {
  bindTerisToViewer();
})

function bindTerisToViewer() {
  teris.squares.forEach(element => {
    element.selfViewer = new SquarePageViewer(element, viewerRef.value);
    element.selfViewer.show();
  });
}

function handleChangeSquareType() {
  teris = createTeris({x: 0, y: 0});
  bindTerisToViewer();
}

function handleSquareMove() {
  teris.centerPoint = {
    x: teris.centerPoint.x,
    y: teris.centerPoint.y + 1
  };
}

function handleSquareMoveUp() {
  teris.centerPoint = {
    x: teris.centerPoint.x,
    y: teris.centerPoint.y - 1
  };

}
</script>

<template>
  <main>
    <SquaresViewer class="play-area" ref="viewerRef" />
    <button @click="handleChangeSquareType">改变</button>
    <button @click="handleSquareMove">移动</button>
    <button @click="handleSquareMoveUp">向上移动</button>
  </main>
</template>

<style scoped>
main {
  padding: 100px 0;
}
.play-area {
  width: 600px;
  height: 75vh;
  min-height: 30rem;
  border: 1px solid #ccc;
  margin: 0 auto;
}
</style>
