<template>
  <div class="home-peage">
    <div class="top-search">
      <van-search
        v-model="searchData.value"
        placeholder='请输入查询内容'
        @change="search"
        show-action
        use-action-slot
      />
    </div>
    <div class="items-container">
      <van-card
        v-for="(item, index) in items"
        :key="index"
        :num="item.num"
        :price="item.price"
        :desc="item.desc"
        :title="item.title"
        :thumb="item.itemImg"
      />
    </div>
    <van-button type='primary' @tap='getData'>获取ajax数据</van-button>
    <van-button type='primary' @tap='toOrder'>toOrder</van-button>
  </div>
</template>

<script>

import itemImg from '@static/images/item.jpg'

export default {
  mpType: 'page',
  data () {
    return {
      searchData: {
        value: ''
      },
      items: [
        {
          num: 2,
          price: '20.00',
          desc: '这是商品描述',
          title: '这是商品抬头这是商品抬头',
          itemImg: itemImg
        }
      ]
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      // todo
    },
    search (event) {
      console.log(event.mp.detail)
    },
    getData () {
      this.$http.baseModule.test().then(res => console.log(res))
    },
    toOrder () {}
  }
}
</script>
