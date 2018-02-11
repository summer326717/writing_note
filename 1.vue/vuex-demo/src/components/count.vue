<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>{{$store.state.count}}</h2>
    <button @click="$store.commit('jia')">+</button><button @click="$store.commit('jian')">-</button>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'count',
  data () {
    return {
      msg: 'hello'
    }
  },
  store
}
</script>
