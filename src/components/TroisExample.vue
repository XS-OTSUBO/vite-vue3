<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      count: 0
    }
  },
  props: {
    msg: String,
  },
}
</script>


<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p>Edit<code>components/HelloWorld.vue</code> to test HMR</p>
    </div>
  </div>
</template>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
