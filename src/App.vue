<script setup lang="ts">
import { ref, reactive, onMounted} from 'vue';
import SquareViewer from './components/square/page-viewer/index.vue';
import { Square } from './components/square';
import { SquarePageViewer, type SquareViewerExpose } from './components/square/page-viewer';

const viewerRef = ref<SquareViewerExpose | null>(null);
const square = reactive(new Square({ x: 2, y: 3 }, 'skyBlue'));

onMounted(() => {
  square.selfViewer = new SquarePageViewer(square, viewerRef.value);
  square.selfViewer.show();
})

function handleSquareMove() {
  setInterval(() => {
    square.coordinate = {
      x: square.coordinate.x,
      y: square.coordinate.y+1
    }
  }, 1000)
}
</script>

<template>
  <main>
    <div class="play-area">
      <SquareViewer ref="viewerRef" />
    </div>
    <button @click="handleSquareMove">移动</button>
    <button @click="square.selfViewer?.remove()">删除</button>
    <button @click="square.selfViewer?.show()">展示</button> 
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
