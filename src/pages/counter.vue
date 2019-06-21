<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a href="/pages/index" class="home">去往首页</a>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  config: {
    navigationBarTitleText: 'Vuex示例'
  },

  computed: {
    ...mapState([
      'count'
    ])
  },

  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ])
  }
}
</script>
