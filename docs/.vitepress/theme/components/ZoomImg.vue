<script setup>
import { withBase } from 'vitepress'
import { onMounted, ref } from 'vue'
import mediumZoom from 'medium-zoom'

defineProps({
    src: String,
    width: Number
})

const imgRef = ref(null)

onMounted(() => {
    mediumZoom(imgRef.value, { background: 'var(--vp-c-bg)' });
})
</script>

<template>
    <img ref="imgRef" :src="withBase(src)" :width="width">
</template>

<style>
.medium-zoom-overlay {
    z-index: 200;
}
.medium-zoom-image {
    z-index: 210;
}
</style>