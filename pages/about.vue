<template>
  <div>
    <md-viewer 
      :src="mdPath"/>
  </div>
</template>

<script>
import MdViewer from '~/components/MdViewer.vue'

export default {
  components: {
    MdViewer
  },
  data() {
    return {
      mdPath: '/doc/about.md'
    }
  }
}
</script>

<style>
</style>
