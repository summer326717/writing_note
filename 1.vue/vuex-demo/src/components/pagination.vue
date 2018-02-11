<template>
  <div class="pagination">
    <span v-if="$store.state.current_page==1">上一页</span>
    <span v-if="$store.state.current_page>1" @click="$store.commit('reduce_pages')">上一页</span>
    <span>{{$store.state.current_page}}</span>
    <a v-for="index in indexs" :key="index" :class="{ 'active': $store.state.current_page == index}" @click='turn_page(index)'>{{ index }}</a>
    <span v-if="$store.state.current_page==$store.state.total_pages">下一页</span>
    <span v-if="$store.state.current_page!=$store.state.total_pages" @click="$store.commit('add_pages')">下一页</span>
    <span>总共{{$store.state.total_pages}}页</span>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'pagination',
  store,
  methods: {
    turn_page (index) {
      this.$store.state.current_page = index
    }
  },
  computed: {
    indexs () {
      var left = 1
      var right = this.$store.state.total_pages
      var ar = []
      if (this.$store.state.total_pages >= 5) {
        if (this.$store.state.current_page > 3 && this.$store.state.current_page < this.$store.state.total_pages - 2) {
          left = this.$store.state.current_page - 2
          right = this.$store.state.current_page + 2
        } else {
          if (this.$store.state.current_page <= 3) {
            left = 1
            right = 5
          } else {
            right = this.$store.state.total_pages
            left = this.$store.state.total_pages - 4
          }
        }
      }
      while (left <= right) {
        ar.push(left)
        left++
      }
      return ar
    }
  }
}
</script>

<style>
.pagination .active {
  color: aqua;
}
</style>
