<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <count></count>
    <pagination></pagination>
  </div>
</template>

<script>
import store from '@/store'
import count from './count'
import pagination from './pagination'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  store,
  components: {
    count,
    pagination
  },
  created () {
    this.$store.state.total_pages = 5
  }
}
</script>

<style>
</style>
