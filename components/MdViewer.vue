<template>
  <vue-markdown 
    :source="mdText"
    class="markdown-body"/>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import axios from 'axios'
import 'star-markdown-css/dist/star-markdown.css'

export default {
  name: 'MdViewer',
  components: {
    VueMarkdown
  },
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  data: function() {
    return {
      mdText: ''
    }
  },
  created() {
    axios.get(this.src).then(res => {
      this.mdText = res.data
    })
  }
}
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
