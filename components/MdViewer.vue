<template>
  <!-- <vue-markdown :source="mdText" class="markdown-body" /> -->
  <div>Markdown</div>
</template>

<script lang="ts" setup>
import 'star-markdown-css/dist/yun/yun-markdown.min.css'

const props = defineProps<{
  src: string
}>()

const mdText = useState('md-text', () => '')
const { data } = await useFetch<string>(props.src)
mdText.value = data.value || ''
</script>

<style>
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 0px 20px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
