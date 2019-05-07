<template>
  <div>
    <h2> 热门景区</h2>
    <div ref='hid' style="overflow: hidden;">
      <div style="width: 22rem;" class="top">
        <div v-for="(item,index) in lpage" :key="index">
          <img :src='item.hotactionImg' />
          <h4>{{item.hotactionName}}</h4>
          <h5>{{item.hotactionPrice}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'iidex',
  mounted () {
    this.scroll = new BScroll(this.$refs.hid, { startX: 0, click: true, scrollX: true, scrollY: false })
  },
  props: ['lpage']
}
</script>

<style scoped lang="less">
  h2{
   font-size: 0.4rem;
  }
.top{
  display: flex;
  div{
    img{
      height: 1.3rem;
      width:2.2rem;
    }
   h4{
     font-size: 0.2rem;
   }
    h5{
      font-size: 0.2rem;
    }
  }
}
</style>
