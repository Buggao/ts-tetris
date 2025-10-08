<script setup lang="ts">
import { ref, reactive, onMounted} from 'vue';
import SquaresViewer from './components/squares/page-viewer/index.vue';
import { SquarePageViewer, type SquareViewerExpose } from './components/squares/page-viewer';
import { SuqareGroup } from "./components/squares/square-group"

const viewerRef = ref<SquareViewerExpose | null>(null);

const longSquare = reactive(new SuqareGroup("longBar", {x: 0, y: 0}))


const teewee = reactive(new SuqareGroup("teewee", {x: 6, y: 0}))

onMounted(() => {
  longSquare.squares.forEach(element => {
    element.selfViewer = new SquarePageViewer(element, viewerRef.value);
    element.selfViewer.show();
  });
  teewee.squares.forEach(element => {
    element.selfViewer = new SquarePageViewer(element, viewerRef.value);
    element.selfViewer.show();
  });
})

function handleSquareMove() {
  longSquare.centerPoint = {
    x: longSquare.centerPoint.x,
    y: longSquare.centerPoint.y + 1
  }
}

function handleSquareMoveUp() {
  longSquare.centerPoint = {
    x: longSquare.centerPoint.x,
    y: longSquare.centerPoint.y - 1
  }

}
</script>

<template>
  <main>
    <SquaresViewer class="play-area" ref="viewerRef" />
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
